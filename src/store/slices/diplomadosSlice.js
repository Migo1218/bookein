import { createSlice } from '@reduxjs/toolkit'
import { collection,getDocs} from "@firebase/firestore";
import { db } from '../../firebase/firebase';


export const diplomadosSlice = createSlice({
    name: "diplomados",
    initialState: {
        listDiplomados: []
    },
    reducers:{
        setDiplomadoList: (state, action) => {
            state.listDiplomados = action.payload;
        }
    }
});

export const { setDiplomadoList } = diplomadosSlice.actions;

export default diplomadosSlice.reducer

export const listarDiplomados = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "diplomados"));
        
     
        const produc = [];
        querySnapshot.forEach((doc) => {
            produc.push({
                id: doc.id, ...doc.data()
                
            })
        });
        dispatch(setDiplomadoList(produc))
        // dispatch(listar(produc));
    }
}