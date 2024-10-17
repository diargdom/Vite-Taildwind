import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function Home() {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    const { searchByTitle, filterItems, items } = context;

    if (searchByTitle?.length > 0) {
      return filterItems?.length > 0 ? (
        filterItems.map((item) => <Card key={item.id} data={item} />)
      ) : (
        <div>We dont have anything 😒</div>
      );
    }
    return items?.map((item) => <Card key={item.id} data={item} />);
  };
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
        <input
          type="text"
          placeholder="Search a product"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
