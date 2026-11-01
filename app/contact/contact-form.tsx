"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactMessage } from "./actions";
import { TOPICS, type ContactState } from "./shared";

const initial: ContactState = { status: "idle" };

const inputCls =
  "mt-2 block w-full rounded-lg border bg-paper-raised px-4 py-3 text-base text-ink placeholder:text-ink-muted/70 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-accent/25";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initial);
  const formRef = useRef<HTMLFormElement>(null);

  // After a failed send, move focus to the first problem so it's not missed on small screens.
  useEffect(() => {
    if (state.status !== "error") return;
    const target = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"], [role="alert"]');
    target?.focus();
    target?.scrollIntoView({ block: "center" });
  }, [state]);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-xl border border-line bg-paper-raised p-8">
        <p className="font-serif text-3xl text-ink">Thanks, message sent.</p>
        <p className="mt-3 leading-relaxed text-ink-soft">I read everything that comes through here and will reply by email as soon as I can.</p>
      </div>
    );
  }

  const err = state.errors ?? {};
  const v = state.values ?? {};
  // Remount fields with the submitted values after a failed send, so nothing is lost.
  const key = JSON.stringify(v);

  return (
    <form ref={formRef} action={action} noValidate className="grid gap-6" key={key}>
      {state.status === "error" && state.message ? (
        <p role="alert" tabIndex={-1} className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-[0.95rem] text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={v.name}
            aria-invalid={!!err.name}
            aria-describedby={err.name ? "name-error" : undefined}
            className={`${inputCls} ${err.name ? "border-red-500" : "border-line-strong"}`}
          />
          {err.name ? <p id="name-error" className="mt-1.5 text-sm text-red-700 dark:text-red-300">{err.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={v.email}
            aria-invalid={!!err.email}
            aria-describedby={err.email ? "email-error" : undefined}
            className={`${inputCls} ${err.email ? "border-red-500" : "border-line-strong"}`}
          />
          {err.email ? <p id="email-error" className="mt-1.5 text-sm text-red-700 dark:text-red-300">{err.email}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="text-sm font-medium text-ink">
          What&rsquo;s it about?
        </label>
        <select id="topic" name="topic" defaultValue={v.topic ?? "General"} className={`${inputCls} border-line-strong`}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          defaultValue={v.message}
          aria-invalid={!!err.message}
          aria-describedby={err.message ? "message-error" : undefined}
          className={`${inputCls} resize-y ${err.message ? "border-red-500" : "border-line-strong"}`}
        />
        {err.message ? <p id="message-error" className="mt-1.5 text-sm text-red-700 dark:text-red-300">{err.message}</p> : null}
      </div>

      {/* Honeypot for bots: hidden from people and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 font-medium text-paper transition-colors hover:bg-accent-strong disabled:cursor-wait disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
