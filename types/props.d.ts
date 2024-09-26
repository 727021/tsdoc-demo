import type { Component, ComponentProps } from 'react'
import type { FormProps } from 'react-router-dom'

export type PaginationItemProps = {
  query: string
  page: number
  active: boolean
}

export type SearchBarProps = FormProps & {
  value?: string
  onChange?: ComponentProps<'input'>['onChange']
  name?: string
  defaultValue?: string
}
