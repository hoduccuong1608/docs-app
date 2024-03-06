import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Button, Card, Modal } from "../lib";
import { BiAtom } from "react-icons/bi";
import { useState } from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "end",
          height: "100%",
        }}>
        {/* <Card
          close
          title="Xin Chao"
          image="https://t3.ftcdn.net/jpg/01/23/52/24/360_F_123522471_XZe5ebqil1DFJRgOUJ6taDP4DnmHjtL7.jpg">
          <p>Giới thiệu mẫu xe mới 2024</p>
          <p>Mẫu xe thể thao đến từ hãng xe Poscher</p>
        </Card> */}

        <Button
          onClick={() => {
            setOpenModal(true);
          }}>
          Open
        </Button>

        <Modal visible={openModal} setVisible={setOpenModal}>
          <h1>Helo</h1>
        </Modal>
      </div>
    </Layout>
  );
}
