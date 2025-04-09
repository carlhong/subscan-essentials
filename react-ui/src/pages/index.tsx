import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'

import { BareServerSideProps } from '@/types/page'
import { Container, PageContent } from '@/ui'

export const getServerSideProps: GetServerSideProps<BareServerSideProps> = async (
  context
) => {
  return {
    props: {},
  }
}

export default function Page({}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <PageContent>
      <Container className="flex-1">
        {'essential'}
      </Container>
    </PageContent>
  )
}
