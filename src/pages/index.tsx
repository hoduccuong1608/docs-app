import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Button, Card } from "../lib";
import { BiAtom } from "react-icons/bi";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}>
        <Button leftIcon={<BiAtom />} variant="secondary">
          Hello
        </Button>
        <Card>Helo</Card>
      </div>
    </Layout>
  );
}
