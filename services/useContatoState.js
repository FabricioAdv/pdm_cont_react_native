import { useCallback, useState } from "react";

const initialState = {
    1: {
        id: '1',
        nome: 'Chaves',
        descricao: '...',
        foto: 'https://www.nexojornal.com.br/incoming/imagens/chaves.jpg/alternates/LANDSCAPE_768/chaves.jpg'
    },
    2: {
        id: '2',
        nome: 'Quico',
        descricao: '...',
        foto: null
    },
    3: {
        id: '3',
        nome: 'Chiquinha',
        descricao: '...',
        foto: null
    },
    4: {
        id: '4',
        nome: 'Sr. Madruga',
        descricao: '...',
        foto: null
    },
    5: {
        id: '5',
        nome: 'Sr. Barriga',
        descricao: '...',
        foto: null
    },
    6: {
        id: '6',
        nome: 'Popis',
        descricao: '...',
        foto: null
    },
    7: {
        id: '7',
        nome: 'Professor Girafales',
        descricao: '...',
        foto: null
    },
    8: {
        id: '8',
        nome: 'Dona Florinda',
        descricao: '...',
        foto: null
    },
    9: {
        id: '9',
        nome: 'Dona Clotilde',
        descricao: '...',
        foto: null
    },
    10: {
        id: '10',
        nome: 'Jaiminho',
        descricao: '...',
        foto: null
    },
    11: {
        id: '11',
        nome: 'Godinez',
        descricao: '...',
        foto: null
    },
    12: {
        id: '12',
        nome: 'Nhonho',
        descricao: '...',
        foto: null
    },
    13: {
        id: '13',
        nome: 'Paty',
        descricao: '...',
        foto: null
    },
    14: {
        id: '14',
        nome: 'Sr. Furtado',
        descricao: '...',
        foto: null
    }
};

const useContatoState = () => 
{
    const [state, setState] = useState(initialState);

    const save = useCallback((contato) => 
    {
        setState({
            ...state,
            [contato.id]: contato
        });
    }, [state]);

    const read = () =>
    {
        return Object.values(state);
    };

    const readById = useCallback((id) => 
    {
        return state[id];
    }, [state]);

    const exclude = useCallback((id) => 
    {
        setState((oldState) => 
        {
            const newState = Object.assign({}, oldState);
            delete newState[id];
            return newState;
        })
    }, []);

    const getNextById = useCallback((id) => 
    {
        return Object.values(state).reduce((acc, item) => 
        {
            if (item.id >= acc)
            {
                return item.id + 1;
            }

            return acc;
        }, 0);
    }, [state]);

    return { save, read, exclude, readById };
}

export default useContatoState;