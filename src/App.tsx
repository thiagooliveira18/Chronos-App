import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';
import { Footer } from './components/Footer';

function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form className='form' action=''>
                    <div className='formRow'>
                        <Input
                            id='task'
                            type='text'
                            title='Task'
                            placeholder='Digite Aqui...'
                        />
                    </div>
                    <div className='formRow'>
                        <p>Teste de texto</p>
                    </div>
                    <div className='formRow'>
                        <Cycles />
                    </div>
                    <div className='formRow'>
                        <DefaultButton icon={<PlayCircleIcon />} />
                    </div>
                </form>
            </Container>
            <Container>
                <Footer />
            </Container>
        </>
    );
}

export default App;
