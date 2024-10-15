'use client';

import Pagina from '@/components/Pagina';
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { ImEvil2 } from "react-icons/im";
import { Formik } from 'formik'; // Importação do Formik

const conversionRates =  {
    USD: 0.20,   
    EUR: 0.18,   
    BTC: 0.000003 
};

export default function CotacaoPage()  {
    const [modal, setShowModal] = useState(false);
    const [resultado, setResultado] = useState("");
    const [moeda, setMoeda] = useState("");

    const valoresConversao = {
        dolar: 0.20,
        euro: 0.18,
        bitcoin: 0.000003,
    };

    function converter(values) {
        const { valor, moeda } = values;
        const valorConvertido = valor * valoresConversao[moeda];
        setResultado(valorConvertido.toFixed(0));
        setShowModal(true);
    }

    return (
        <Pagina titulo={"Página de Conversão"}>
            <Formik
                initialValues={{
                    moeda: "",
                    valor: "0",
                }}
                onSubmit={values => {
                    setMoeda(values.moeda);
                    converter(values);
                }}
            >
                {({ values, handleChange, handleSubmit, handleReset }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Digite o Valor: </Form.Label>
                            <Form.Control
                                type="number"
                                name="valor"
                                value={values.valor}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Selecione a Moeda:</Form.Label>
                            <Form.Select
                                name="moeda"
                                value={values.moeda}
                                onChange={handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="dolar">Dólar</option>
                                <option value="euro">Euro</option>
                                <option value="bitcoin">Bitcoin</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" className="me-2">Converter</Button>
                            <Button type="button" onClick={handleReset}>Limpar</Button>
                        </div>
                    </Form>
                )}
            </Formik>

            {resultado && moeda && (
                <div style={{ marginTop: "20px" }}>
                    <h4>Resultado da Conversão:</h4>
                    <p>
                        {resultado} {moeda}
                    </p>
                </div>
            )}

            {/* Modal para exibir resultado */}
            <Modal show={modal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Fechar</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div style={{ marginTop: "20px" }}>
                        <h4>Resultado da Conversão: {resultado} {moeda}</h4>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </Pagina>
    );
}
