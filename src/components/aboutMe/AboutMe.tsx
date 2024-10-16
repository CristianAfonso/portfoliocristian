import { useTranslation } from 'react-i18next';

const AboutMe: React.FC = () => {
    const {t} = useTranslation();
    return(
        <section>
            <h3>
                {t('aboutMe.title')}
            </h3>
            <p>
                {t('aboutMe.content')}
            </p>
        </section>
    )
}
export default AboutMe;