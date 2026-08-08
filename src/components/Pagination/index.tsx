'use client';

import Link from 'next/link';
import { PaginationWrapper, PageButton, PageInfo } from './styles';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= totalPages - 1;

  return (
    <PaginationWrapper>
      <Link href={`/produtos?page=${currentPage - 1}`} passHref legacyBehavior>
        <PageButton $disabled={isFirstPage}>Anterior</PageButton>
      </Link>

      <PageInfo>
        Página {currentPage + 1} de {totalPages}
      </PageInfo>

      <Link href={`/produtos?page=${currentPage + 1}`} passHref legacyBehavior>
        <PageButton $disabled={isLastPage}>Próxima</PageButton>
      </Link>
    </PaginationWrapper>
  );
}