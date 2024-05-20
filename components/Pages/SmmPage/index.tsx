import Welcome from "@components/Welcome";
import { ISmmLanguageContent } from "@interfaces/smmPage";

const SmmPage = ({ data }: { data: ISmmLanguageContent }) => {
  const { main } = data;

  return (
    <div className="w-full h-full overflow-hidden relative pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
      <Welcome main={main} page="smm"/>
      {/* <Advantages advantages={advantages} />
      <RequestAndSocial />
      <WeWorkWith data={weWorkWith} />
      <HowWeWork data={howWeWork} />
      <FeedbackForm /> */}
    </div>
  );
};
export default SmmPage;
