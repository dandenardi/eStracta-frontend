'use client';

import React, { useState, useEffect } from 'react'
import api
    from '@/utils/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactPaginate from 'react-paginate';
import SortIcon from '@mui/icons-material/Sort';
import { Button } from '@mui/base';
import './pagination.css';

function CompanyList() {

    const [companies, setCompanies] = useState([])
    const [numberOfCompanies, setNumberOfCompanies] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [column, setColumn] = useState('CNPJ')
    const [direction, setDirection] = useState('asc')


    const itemsPerPage = 25;

    useEffect(() => {
        api.get('/')
            .then((response) => {
                setNumberOfCompanies((response.data.length))
            })
            .catch((error) => {
                console.error("ERROR retrieving number of results", error)
            })
    })

    useEffect(() => {
        api.get('/companies', {
            params: {
                start: currentPage * itemsPerPage,
                limit: itemsPerPage,
                sort: column,
                dir: direction
            }
        })
            .then((response) => {

                setCompanies(response.data)

            })
            .catch((error) => {
                console.error("Error fetching companies", error);
            });
    }, [currentPage, column, direction]);

    function handleCNPJSorting() {
        setColumn('CNPJ')

        if (direction === 'asc') {
            setDirection('desc')
        } else {
            setDirection('asc')
        }
    }

    function handleRazaoSorting() {
        setColumn('nome_razao')

        if (direction === 'asc') {
            setDirection('desc')
        } else {
            setDirection('asc')
        }
    }

    function handleFantasiaSorting() {
        setColumn('nome_fantasia')

        if (direction === 'asc') {
            setDirection('desc')
        } else {
            setDirection('asc')
        }
    }

    function handlePageChange({ selected }) {
        setCurrentPage(selected);
    }


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow>

                            <TableCell>CNPJ <Button onClick={handleCNPJSorting}>< SortIcon sx={{ fontSize: "small" }} /></Button></TableCell>
                            <TableCell>Nome Razão <Button onClick={handleRazaoSorting}>< SortIcon sx={{ fontSize: "small" }} /></Button></TableCell>
                            <TableCell>Nome Fantasia <Button onClick={handleFantasiaSorting}>< SortIcon sx={{ fontSize: "small" }} /></Button></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {companies.map((company) => (
                            <TableRow key={company.CNPJ} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{company.CNPJ}</TableCell>
                                <TableCell>{company.nome_razao}</TableCell>
                                <TableCell>{company.nome_fantasia}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>


            {/* Pagination */}

            <ReactPaginate
                pageCount={Math.ceil(numberOfCompanies / itemsPerPage)}
                onPageChange={handlePageChange}
                breakLabel="..."
                nextLabel="next >"
                pageRangeDisplayed={5}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                activeClassName={'item active '}
                breakClassName={'item break-me '}
                containerClassName={'pagination'}
                disabledClassName={'disabled-page'}
                nextClassName={"item next "}
                pageClassName={'item pagination-page '}
                previousClassName={"item previous"}
            />



        </div>
    )
}

export default CompanyList