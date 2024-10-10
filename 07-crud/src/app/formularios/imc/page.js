'use client'
import Pagina from '@/components/Pagina';
import React, { useState } from 'react';
import { Form, Button, CardImg, Modal } from 'react-bootstrap';
import { ImEvil2 } from "react-icons/im";

export default function ImcPage() {
    const [showModal, setShowModal] = useState(false);
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState('0.0');

    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState('');

    function calcular(event) {
        event.preventDefault();

        const pesoNumerico = Number(peso);
        const alturaNumerico = Number(altura);

        const resultadoIMC = (pesoNumerico / (alturaNumerico * alturaNumerico)).toFixed(1);
        console.log('Resultado IMC =>', resultadoIMC);

        setImc(resultadoIMC);


        if (resultadoIMC < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
            setClassificacao('Peso normal');
        } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
            setClassificacao('Sobrepeso');
        } else if (resultadoIMC >= 30 && resultadoIMC < 34.9) {
            setClassificacao('Obesidade grau 1');
        } else if (resultadoIMC >= 35) {
            setClassificacao('Obesidade grau 2');
        }

        console.log({ imc: resultadoIMC, classificacao });

        setShowModal(true);
    }

    return (
        <Pagina titulo="Calculadora IMC">
            <div>
                <CardImg src="/image.png" />
            </div>

            <Form onSubmit={calcular}>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={e => { setNome(e.target.value); }}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gênero</Form.Label>
                    <Form.Select
                        name="genero"
                        value={genero}
                        onChange={e => { setGenero(e.target.value); }}
                    >
                        <option>Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Altura (em metros)</Form.Label>
                    <Form.Control
                        type="number"
                        value={altura}
                        onChange={e => { setAltura(e.target.value); }}
                        min={0.01}
                        step={0.01}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Peso (em kg)</Form.Label>
                    <Form.Control
                        name="peso"
                        type='number'
                        value={peso}
                        onChange={e => { setPeso(e.target.value); }}
                        min={0.01}
                        step={0.01}
                    />
                    <Form.Text>Altura em metros. Ex: 1,75</Form.Text>
                </Form.Group>

                <Form.Group className='mb-3 text-center'>
                    <Button type="submit" variant="success"><ImEvil2 /> Calcular</Button> {/* Corrigido */}
                </Form.Group>
            </Form>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>O seu IMC é {imc}</p>
                    <p> Sua classificação é: {classificacao}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)} >
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Pagina>
    );
}
