
const initialState = {
    isLoading: false,
    isError: false,
    product: [],
}


const productReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case 'SET_LOADING': //setloadıng çalışmaya başladığında,
            //yüklenme başlandığı anlamına geliyor,isloadıng truya çek diyoruz burada.
            return { ...state, isLoading: true };

        case 'SET_ERROR'://stateteki bilgileri sabit tut (...state)
            //hata geldiyse yükleme bitmiştir oyuzden isloadıngı false çek.
            return { ...state, isLoading: false, isError: action.payload };

        case 'SET_PRODUCT'://stateteki bilgileri sabit tut (...state)
            // isloadıng güncellensin,setproduct çalıştıysa yuklenme işlemi bitmiştir.
            // yüklenme işlemi başarılı oldu erroru false çek,
            //apiden yeni değerler geldi productsın yeni değeri actionın payloadı olacak
            return {
                ...state, isLoading: false, isError: false, products: action.payload

            }

        default:
            return state;
    }
}
export default productReducer