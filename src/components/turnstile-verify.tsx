"use client";

import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { getSafeRedirectPath } from "@/lib/verification";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      appearance?: "always" | "execute" | "interaction-only";
      callback: (token: string) => void;
      "error-callback"?: (errorCode?: string) => void;
      "expired-callback"?: () => void;
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    onTurnstileLoad?: () => void;
  }
}

type TurnstileVerifyProps = {
  siteKey: string;
};

export function TurnstileVerify({ siteKey }: TurnstileVerifyProps) {
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSuccess = useCallback(
    async (token: string) => {
      setStatus("loading");
      setErrorMessage(null);

      try {
        const response = await fetch("/api/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const data = (await response.json()) as {
          error?: string;
          codes?: string[];
        };

        if (!response.ok) {
          const codes = data.codes?.join(", ") ?? "";
          throw new Error(
            codes ? `${data.error ?? "Verification failed"} (${codes})` : (data.error ?? "Verification failed"),
          );
        }

        const next = getSafeRedirectPath(searchParams.get("next"));
        window.location.replace(next);
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "Verification failed. Please try again.",
        );
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      }
    },
    [searchParams],
  );

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      appearance: "always",
      callback: (token) => {
        void handleSuccess(token);
      },
      "error-callback": (errorCode) => {
        setStatus("error");
        if (errorCode === "110200") {
          setErrorMessage(
            "This domain is not allowed for your Turnstile site key. Add localhost and 127.0.0.1 in the Cloudflare Turnstile widget settings, or use the built-in test keys in development.",
          );
        } else {
          setErrorMessage(
            errorCode
              ? `Turnstile error ${errorCode}. Please try again.`
              : "Verification failed. Please try again.",
          );
        }
      },
      "expired-callback": () => {
        setStatus("idle");
        setErrorMessage(null);
      },
    });
  }, [handleSuccess, siteKey]);

  useEffect(() => {
    window.onTurnstileLoad = renderWidget;
    if (window.turnstile) {
      renderWidget();
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      delete window.onTurnstileLoad;
    };
  }, [renderWidget]);

  if (!siteKey) {
    return (
      <p className="text-sm" style={{ color: "var(--club-muted-text)" }}>
        Human verification is not configured. Add Cloudflare Turnstile keys to your
        environment variables.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad"
        strategy="afterInteractive"
      />
      <div ref={containerRef} />
      {status === "loading" ? (
        <p
          className="font-mono text-xs uppercase tracking-[0.12em]"
          style={{ color: "var(--club-primary)" }}
        >
          Verifying...
        </p>
      ) : null}
      {status === "error" && errorMessage ? (
        <p className="text-sm" style={{ color: "var(--club-muted-text)" }}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
