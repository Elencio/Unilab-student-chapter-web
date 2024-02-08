import { Card } from "./ui/card";

const Hero = () => {
  return (
    <div className="p-11 flex flex-wrap gap-4 items-center justify-center">
      <Card className="max-w-sm rounded overflow-hidden">
        <img className="w-full" src="https://media.licdn.com/dms/image/D4D22AQF5czP_XTz1Hw/feedshare-shrink_800/0/1692714742585?e=1710374400&v=beta&t=5IKCoU-2W_11yWdJTcMb-cKAK4nTPAcoFGtHP5aI13M" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 text-[#771bc9]">The Unilab Student Chapter-OPTICA</div>
          <p className="text-gray-700 text-base">
          Os estudantes fazem parte do projeto de extensão Unilab Optic Chapter – associado à entidade norte-americana “The Optical Society” (OSA), que tem como base a chamada Optica
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#optica</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#unilab</span>
        </div>
      </Card>

      <Card className="max-w-sm rounded overflow-hidden">
        <img className="w-full" src="https://media.licdn.com/dms/image/D4D22AQHzfO5iIDBZtA/feedshare-shrink_800/0/1697128070358?e=1710374400&v=beta&t=eUNh_4rNygdddTARaeCYOacinEdl-ZjR6Lb77hol5vM" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 text-[#771bc9]">O Programa de Imersão Amplify Optics </div>
          <p className="text-gray-700 text-base">
          É um programa destinado a reunir estudantes negros de graduação e pós-graduação em física e engenharia, além de oferecer aos estudantes participantes ....
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#optic</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fotonic</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#osa</span>
        </div>
      </Card>

      <Card className="max-w-sm rounded overflow-hidden">
        <img className="w-full" src="https://media.licdn.com/dms/image/D4D22AQFGZyeg_UD3Kg/feedshare-shrink_2048_1536/0/1704056322159?e=1710374400&v=beta&t=6cYp0OrYjtU41gANYY_zJ2FAbI6TYtZy8n0PYVPBbJs" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 text-[#771bc9]"> Feira do conhecimento - Centro de eventos do ceára</div>
          <p className="text-gray-700 text-base">
          A participação da Unilab Student Chapter na Feira do Conhecimento destaca-se como uma oportunidade para os membros da organização apresentarem suas contribuições e envolvimento ...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#optic</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fotonic</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#colors</span>
        </div>


      </Card>

    </div>
  );
};

export default Hero;
