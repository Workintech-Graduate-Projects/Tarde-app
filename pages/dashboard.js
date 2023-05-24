import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dropdown, Grid } from "@nextui-org/react";
import { dummyData } from "../components/dummy-data";
import Table from "react-bootstrap/Table";

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

        <div className="flex">
          <button
            className="p-2 hover:bg-slate-50"
            onClick={() => {
              router.push("/");
            }}
          >
            Anasayfa
          </button>
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
      <main className="flex justify-center mt-10">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th className="hover:bg-red-300">First Name</th>
              <th className="hover:bg-red-300">Last Name</th>
              <th className="hover:bg-red-300"> Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
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
