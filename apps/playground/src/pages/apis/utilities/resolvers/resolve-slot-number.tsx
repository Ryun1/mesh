import { useState } from "react";
import Link from "~/components/link";

import { resolveSlotNo } from "@meshsdk/core";

import Select from "~/components/form/select";
import InputTable from "~/components/sections/input-table";
import LiveCodeDemo from "~/components/sections/live-code-demo";
import TwoColumnsScroll from "~/components/sections/two-columns-scroll";

export default function ResolveSlotNumber() {
  return (
    <TwoColumnsScroll
      sidebarTo="resolveSlotNumber"
      title="Resolve Slot Number"
      leftSection={Left()}
      rightSection={Right()}
    />
  );
}

function Left() {
  return (
    <>
      <p>
        Converts datum into hash. Getting the hash is useful when you need to
        query for the UTXO that contain the assets you need for your
        transaction's input.
      </p>
      <p>
        Explore <Link href="/apis/transaction">Transaction</Link> to learn more
        about designing Datum, and learn how to query for UTXOs containing the
        datum hash.
      </p>
    </>
  );
}

function Right() {
  const [userInput, setUserInput] = useState<
    "preprod" | "testnet" | "preview" | "mainnet"
  >("preprod");

  async function runDemo() {
    const slot = resolveSlotNo(userInput);
    return slot;
  }

  let codeSnippet = `resolveSlotNo('${userInput}');`;

  return (
    <LiveCodeDemo
      title="Resolve Slot Number"
      subtitle="Get the slot number for the network"
      code={codeSnippet}
      runCodeFunction={runDemo}
    >
      <InputTable
        listInputs={[
          <Select
            id="chooseNetwork"
            options={{
              preprod: "preprod",
              testnet: "testnet",
              preview: "preview",
              mainnet: "mainnet",
            }}
            value={userInput}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setUserInput(
                e.target.value as "preprod" | "testnet" | "preview" | "mainnet",
              )
            }
            label="Select network"
            key={1}
          />,
        ]}
      />
    </LiveCodeDemo>
  );
}
