import { ExampleComponent } from '../../../components';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '../../../components/SearchBar';

const clickFunction = () => {
    window.alert("He clickado al botón")
}

export const ExampleSection = () => {
    const { t } = useTranslation()
    return (
        <div>
            <p>{t('exampleView.exampleSection.description')}</p>
            <ExampleComponent onClick={clickFunction} label={t('exampleView.exampleSection.buttonText')} />
            <SearchBar />
        </div>
    );
};
