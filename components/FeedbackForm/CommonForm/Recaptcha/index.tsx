import ReCAPTCHA from "react-google-recaptcha";
import styles from "../../feedbackform.module.css";
import { useLocale } from "next-intl";

interface Props {
  handleRecaptchaChange: (token: string | null) => void;
  ref: React.RefObject<ReCAPTCHA>;
}

const Recaptcha = ({
  handleRecaptchaChange,
  ref,
}: Props) => {
  const localActive = useLocale();

  const recaptchaSiteKey = process.env
    .NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

  return (
    <ReCAPTCHA
      className={styles.g_recaptcha}
      theme="dark"
      hl={localActive}
      sitekey={recaptchaSiteKey}
      onChange={handleRecaptchaChange}
      ref={ref}
    />
  );
};

export default Recaptcha;
