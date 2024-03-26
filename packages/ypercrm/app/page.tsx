"use client";

// Core
import Common from "../../core/components/common";
// Components
import Crm from "./components/crm";

export default function Page() {
  return (
    <>
      <h1>YperCRM - Monorepo</h1>
      <Common name="YperCRM" />
      <Crm />
    </>
  );
}
