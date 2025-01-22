import { ExampleComponent } from '../../../components';
import { useTranslation } from 'react-i18next';

export const ExampleSection = () => {
    const { t } = useTranslation()
    return (
        <div>
            <p>{t('exampleView.exampleSection.description')}</p>
            <ExampleComponent label={t('exampleView.exampleSection.buttonText')} />
        </div>
    );
};
