import {
  Header,
  Hero,
  About,
  Vision,
  Mission,
  Values,
  WhyWeExist,
  PresidentMessage,
  Team,
  GetInvolved,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Vision />
      <Mission />
      <Values />
      <WhyWeExist />
      <PresidentMessage />
      <Team />
      {/* Get Involved + Footer combined in one full-screen section */}
      <div className="min-h-screen flex flex-col">
        <GetInvolved />
        <Footer />
      </div>
    </main>
  );
}
