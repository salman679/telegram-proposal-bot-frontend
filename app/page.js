import DashboardClient from "./dashboard-client";
import {
  fetchDashboardSnapshot,
  buildOverviewApiPath
} from "../lib/admin-data";

export const dynamic = "force-dynamic";

function AccessGate({ status }) {
  const title =
    status === "unauthorized"
      ? "Invalid dashboard key"
      : "Enter dashboard key";
  const copy =
    status === "unauthorized"
      ? "The provided key was rejected by the backend. Check the deployed backend project's DASHBOARD_API_KEY and try again."
      : "Use your dashboard key to open the admin view.";

  return (
    <main className="gate-shell">
      <section className="gate-panel">
        <p className="eyebrow">Proposal Bot Dashboard</p>
        <h1>{title}</h1>
        <p className="gate-copy">{copy}</p>
        <form className="gate-form" method="get">
          <label className="field-label" htmlFor="key">
            Dashboard key
          </label>
          <input
            className="gate-input"
            id="key"
            name="key"
            type="password"
            autoComplete="off"
            placeholder="Enter your key"
          />
          <button className="gate-button" type="submit">
            Open dashboard
          </button>
        </form>
      </section>
    </main>
  );
}

function ErrorState({ message }) {
  return (
    <main className="gate-shell">
      <section className="gate-panel">
        <p className="eyebrow">Proposal Bot Dashboard</p>
        <h1>Dashboard unavailable</h1>
        <p className="gate-copy">{message}</p>
      </section>
    </main>
  );
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const key = typeof params?.key === "string" ? params.key.trim() : "";

  if (!key) {
    return <AccessGate status="missing" />;
  }

  try {
    const snapshot = await fetchDashboardSnapshot(key);

    return (
      <DashboardClient
        apiPath={buildOverviewApiPath(key)}
        initialSnapshot={snapshot}
      />
    );
  } catch (error) {
    if (error?.status === 401) {
      return <AccessGate status="unauthorized" />;
    }

    return (
      <ErrorState
        message={error?.message || "The dashboard backend could not be reached."}
      />
    );
  }
}
