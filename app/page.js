import DashboardClient from "./dashboard-client";
import {
  fetchDashboardSnapshot,
  buildOverviewApiPath,
  getDashboardStatus
} from "../lib/admin-data";

export const dynamic = "force-dynamic";

function AccessGate({ status }) {
  const title =
    status === "unconfigured"
      ? "Dashboard key not set"
      : "Enter dashboard key";
  const copy =
    status === "unconfigured"
      ? "Add DASHBOARD_API_KEY or STATS_API_KEY to the frontend env, then reload this page."
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
  const key = typeof params?.key === "string" ? params.key : "";
  const status = getDashboardStatus(key);

  if (status !== "authorized") {
    return <AccessGate status={status} />;
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
