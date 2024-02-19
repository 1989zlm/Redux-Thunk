//aksiyon oluşturan fonksiyonlar
//obje oluşturan fonsiyon



export const setLoading = () => {
    return {
        type: "SET_LOADING",
        //payloada gerek yok, 
        //çunku stora bişey yuklemiyoruz dadece loading çalışacak
    }
}

export const setProducts = (payload) => {
    return {
        type: 'SET_PRODUCTS',
        payload,
    }

}
export const setError = (payload) => {
    return {
        type: 'SET_ERROR',
        payload,
    }

}
//! Redux Thunk Devreye Girince
// Aksiyon Oluşturan fonksiyonlar
// redux thunk işin içerisne girince bu a.o.f return satırında
// yeni bir fonskyion döndürme yeteneğine sahip olur.
// Bu sayede bu return edilen fonksiyonların içerisinde api istekleri
// yapabiliriz.