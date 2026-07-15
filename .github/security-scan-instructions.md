# Security scan instructions — YSLG fleet standard

Generic instructions applied to every repo (no per-project customization). Stack
assumptions: Next.js + TypeScript, Better Auth (or similar session auth), PostgreSQL
via an ORM (Drizzle/Prisma), Cloudflare R2 for uploads, Resend/Postmark for email.

Priority checks, in order:

1. **Authorization (IDOR) — top risk.** Authentication is not authorization: verify
   every route that reads or mutates a record by ID also checks the caller is allowed
   to access *that specific record* (ownership / org / role scoping). Flag any handler
   that trusts a client-supplied ID without a scoping check. Multi-tenant data (per
   charity/org/user) must be scoped in every query, not just at page level.
2. **Missing auth checks.** Every protected API route and server action must verify the
   session server-side. Flag routes that rely only on client-side gating or middleware
   assumptions.
3. **Secrets.** Flag hardcoded API keys, tokens, passwords, connection strings — in
   code, config, comments, or logs. Flag credentials or PII written to logs.
4. **Injection.** Raw SQL string interpolation (including inside ORM `sql` template
   escapes), command injection, path traversal in file paths derived from user input.
5. **Input validation.** User input reaching the database, filesystem, or external
   services without schema validation (Zod or equivalent) at the API boundary.
6. **Error handling.** Stack traces, ORM errors, or internal details returned to
   clients. Errors should be generic to the user, detailed only in server logs.
7. **File uploads.** Type validation by content (magic bytes) not extension, size
   limits, randomized storage filenames, no user-controlled paths.
8. **Webhooks.** Every incoming webhook handler must verify the provider signature
   before trusting the payload.
9. **Sessions/CSRF.** Insecure cookie settings, missing CSRF protection on
   state-changing requests, session fixation.
10. **XSS.** `dangerouslySetInnerHTML` with unsanitized input, user content rendered
    into HTML/emails without escaping.

Do not flag: missing rate limiting on non-authentication endpoints, DoS/resource
concerns, dependency-version vulnerabilities (covered by npm audit/Dependabot), or
pure style issues.
