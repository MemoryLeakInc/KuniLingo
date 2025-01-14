import { ExampleComponent } from '../../../components';

export const ExampleSection = () => {
    return ( // using html code to prevent this eslint error ->  6:14  error  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`  react/no-unescaped-entities
        <div>
            I&#39;m a section  
            <ExampleComponent label="Click me" />
        </div>
    );
};
