import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '../../../components/SearchBar';
import { ButtonComponent } from '../../../components/ButtonComponent';
import { TaskCard } from '../../../components/TaskCard';

export const ExampleSection = () => {
    const { t } = useTranslation()
    const [clickCount, setClickCount] = useState(0);

    const clickFunction = () => {
        setClickCount(clickCount + 1);
    }
    return (
        <div>
            <p>{t('exampleView.exampleSection.description')}</p>
            <div>
                <p> Button clicked {clickCount} times </p>
                <ButtonComponent onClick={clickFunction} label={t('exampleView.exampleSection.buttonText')} />
            </div>
            <br></br>
            <SearchBar />
            <br></br>
            <TaskCard  taskName={"Make a card for tasks"} userName={"Vicente"}/>
        </div>
    );
};
