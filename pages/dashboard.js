import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dropdown, Grid, Table } from "@nextui-org/react";
import { dummyData } from "../components/dummy-data";
import PTable from "@/components/Table";
function dashboard() {
  const [isValid, setIsValid] = useState(false);

  const router = useRouter();
  const routeToHome = () => {
    router.push("/");
    alert("Lütfen Giriş yapınız");
  };
  useEffect(() => {
    if (localStorage.getItem("token") === "1234567" ? false : true) {
      routeToHome();
    } else {
      setIsValid(true);
    }
  }, []);

  return isValid ? (
    <div className="">
      <header className="flex justify-center items-center flex-col">
        <h2>Dashboard</h2>
        <div>
          <Grid.Container gap={1.5}>
            <Grid xs={12}>
              <Grid>
                <Dropdown>
                  <Dropdown.Button id="arial-2" size={10} color="default" light>
                    Şehirler
                  </Dropdown.Button>
                  <Dropdown.Menu
                    color="default"
                    variant="light"
                    aria-label="Actions"
                  >
                    {dummyData.map((item) => (
                      <Dropdown.Item
                        onClick={() => history.push(`/${item.sehir}`)}
                        key={item.id}
                      >
                        {item.sehir}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>
            </Grid>
          </Grid.Container>
        </div>
      </header>
      <main>
        <Table
          selectionMode="multiple"
          key={"sdasd"}
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header key="00"> 
            <Table.Column>NAME</Table.Column>
            <Table.Column>ROLE</Table.Column>
            <Table.Column>STATUS</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Zoey Lang</Table.Cell>
              <Table.Cell>Technical Lead</Table.Cell>
              <Table.Cell>Paused</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Jane Fisher</Table.Cell>
              <Table.Cell>Senior Developer</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
              <Table.Cell>Vacation</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </main>
    </div>
  ) : (
    <>
      <header>Hoşgeldiniz</header>
    </>
  );
}

export default dashboard;
