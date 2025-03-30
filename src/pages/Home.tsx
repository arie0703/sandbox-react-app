import { Button } from "../components/Button";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="card">
          <p>This is Home Component.</p>
          <Button str={"test"}></Button>
        </div>
      </div>
    </>
  );
};
