//apiden ürün verileri al
// ve yüklenme durumlarını hata durumunu
// ve gelen verileri store'da saklaycağız
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productAction";
import Loader from "../components/Loader";

const MainPage = () => {
  //store'a abone ol
  const store = useSelector((store) => store.products);

  const dispatch = useDispatch();

  console.log(store);

  useEffect(() => {
    //1)isteğin başladığını store'a bildir
    dispatch(setLoading()); //bunu buradan alıp kalabalığı önlemek için productactıon a taşıdık

    axios //istek attık
      .get("http://localhost:3040/products")
      //2)isteğin başarılı olduğunu store'a bildir
      .then((res) => dispatch(setProducts(res.data))) //console.log(res.data))yerine dispatch yazdık

      //3) isteğin başarısız olduğunu stora bildir.
      .catch((err) => dispatch(setError(err.message))); //console.log(err));
  }, []);

  return (
    <div>
      {/* veriler yükleniyorsa bunu bas ekrana */}
      {/* isloading true ise bunu ekrana bas */}
      {store.isLoading && <Loader />}
      {/* hata oluştuysa bunu bas ekrana */}

      {/* veriler geldiyse bunu bas ekrana */}
    </div>
  );
};

export default MainPage;
