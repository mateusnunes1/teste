'use client';

import styles from './pesquisavagas.module.css';
import {useState} from 'react';
import {vagas} from '../dados/vagas';

export default function PesquisaVagas() {
    const [pesquisa, setPesquisa] = useState('');

    const vagasFiltradas = vagas.filter(vaga =>
        vaga.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
        vaga.empresa.toLowerCase().includes(pesquisa.toLowerCase()) ||
        vaga.localização.toLowerCase().includes(pesquisa.toLowerCase()) ||
        vaga.categoria.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return (
    <div>
        <div className={styles.pesquisa}>
            <span className={styles.icone}>⌕</span>
            <input type="text" placeholder="Digite o nome da vaga que deseja encontrar" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}/>
        </div>
        {pesquisa &&(
            <div className={styles.resultados}>
                {vagasFiltradas.length > 0 ? (
                    vagasFiltradas.map((vaga) => (
                        <div key={vaga.id} className={styles.vaga}>
                            <h3>{vaga.titulo}</h3>
                            <p><strong>Empresa:</strong> {vaga.empresa}</p>
                            <p><strong>Local:</strong> {vaga.localização}</p>
                            <p><strong>Categoria:</strong> {vaga.categoria}</p>
                            <button >Ver Vaga</button>
                        </div>
                    ))
                ) : (   
                    <p>Nenhuma vaga encontrada.</p>
                )}
            </div>
        )}
    </div>
)};