import React from 'react';
import ReactDOM from 'react-dom';
import Currencies from './currencies';

describe('Teste do componente de listagem de moedas', () => {
    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Currencies />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});