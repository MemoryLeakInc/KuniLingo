import { ExampleComponent } from '../../../components';
import { useTranslation } from 'react-i18next';

export const ExampleSection = () => {
    const { t } = useTranslation()
    return ( // using html code to prevent this eslint error ->  6:14  error  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`  react/no-unescaped-entities
        <div>
            <p>{t('sectionText', { defaultValue: 'I&#39;m a section' })}</p>
            <ExampleComponent label={t('buttonLabel', { defaultValue: 'Click me' })} />
        </div>
    );
};
