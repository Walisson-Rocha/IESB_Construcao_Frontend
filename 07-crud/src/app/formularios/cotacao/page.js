'use client';

import Pagina from '@/components/Pagina';
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { ImEvil2 } from "react-icons/im";


const conversionRates = {
    USD: 0.20,
    EUR: 0.18,
    BTC: 0.000003
};

export default function CotacaoPage() {
    const [realAmount, setRealAmount] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleConvert = (event) => {
        event.preventDefault();
        const amount = parseFloat(realAmount);

        if (selectedCurrency && !isNaN(amount) && amount > 0) {

            const result = (amount * conversionRates[selectedCurrency]).toFixed(6);
            setConvertedAmount(result);
            setShowModal(true);
        } else {
            setConvertedAmount("Valor inválido");
        }
    };

    const handleClear = () => {
        setRealAmount('');
        setConvertedAmount(null);
        setShowModal(false);
    };

    return (
        <Pagina titulo="Conversor de Moedas">
            <div className="container">
                <header className="text-center mb-4">
                    <p className="lead">Insira o valor em reais e escolha a moeda para conversão.</p>
                </header>

                <Form onSubmit={handleConvert}>
                    <Form.Group>
                        <Form.Label>Valor em Reais (R$)</Form.Label>
                        <Form.Control
                            type="number"
                            value={realAmount}
                            onChange={(e) => setRealAmount(e.target.value)}
                            placeholder="Digite o valor em reais"
                            min="0"
                            step="0.01"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Escolha a Moeda</Form.Label>
                        <Form.Control as="select" value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                            <option value="USD">Dólar</option>
                            <option value="EUR">Euro</option>
                            <option value="BTC">Bitcoin</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-7 text-center'>
                        <Button type="submit" variant="success">
                            <ImEvil2 /> Converter
                        </Button>
                        <Button variant="secondary" onClick={handleClear} className="ml-2">
                            Limpar
                        </Button>
                    </Form.Group>
                </Form>

                {/* Modal para exibir o resultado */}
                <Modal show={showModal} onHide={handleClear} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Resultado da Conversão</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>O valor em {selectedCurrency === 'USD' ? 'Dólares' : selectedCurrency === 'EUR' ? 'Euros' : 'Bitcoins'} é: {convertedAmount}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClear}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Pagina>
    );
}
