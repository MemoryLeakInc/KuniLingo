import {render, screen} from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../App'
import { describe } from 'vitest'

describe('App.jsx', () => {
  
    it('should contain a button' , async () => {
        render(<App/>)
        const button = await screen.findByRole('button')
        expect(button).toBeInTheDocument()
    })
    
    it('should count the clicks on the button', async () => {
        render(<App/>)
        const button = await screen.findByRole('button')
        await userEvent.click(button)
        expect(button).toHaveTextContent('count is 1')
    } )
    
})