

const Cards = () => {
    return (
        <div className='w-full py-[1rem] px-4 bg-white'>
            <div className=" py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre Optica</h2>
                    <p className="text-gray-700 mb-4">
                        Optica (anteriormente conhecida como OSA), Avançando Óptica e Fotônica Mundialmente,
                        é a sociedade dedicada a promover a geração, aplicação, arquivamento e disseminação de
                        conhecimento no campo. Fundada em 1916, é a principal organização para cientistas, engenheiros,
                        profissionais de negócios, estudantes e outros interessados na ciência da luz. As renomadas
                        publicações da Optica, reuniões, recursos online e atividades presenciais
                        impulsionam descobertas, moldam aplicações na vida real e aceleram o progresso científico, técnico e educacional.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto py-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre Unilab student Chapter</h2>
                    <p className="text-gray-700 mb-4">
                        Unilab Optic Chapter – associado à entidade norte-americana “The Optical Society” (OSA), que tem como base a chamada Optica
                        – uma sociedade que se dedica a promover a geração, aplicação, arquivamento e disseminação de conhecimento, na área de óptica
                        e fotônica através do mundo, sendo coordenado pelo docente – doutor em Engenharia Elétrica – Sabi Yari Moïse Bandiri (beninense),
                        do Instituto de Engenharias e Desenvolvimento Sustentável (IEDS/Unilab).
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto my-5">
                    <img className="w-full md:w-[300px] h-auto" src="https://media.licdn.com/dms/image/C4E03AQFJ8IWvX5fEIg/profile-displayphoto-shrink_800_800/0/1625315614411?e=1712793600&v=beta&t=CyM6KunuB9_E5ZVd8oO93Uk0cm5qawpUFyH1XeKzVDQ" alt="" />
                    <div className="space-y-4">
                        <h1 className="font-bold text-xl">Coordenador do Projeto</h1>
                        <p className="text-gray-700 leading-6">
                            Profissional com graduação em Engenharia Elétrica (ISPJAE - Cuba), revalidado pela UFF. Mestrado em Telecomunicações (INATEL),
                            doutorado em Engenharia Elétrica (UNIFEI) com período sanduíche na UTH - Cuba. Atualmente, é Professor Adjunto - A na UNILAB,
                            também desempenhando a função de Vice Coordenador do curso de Engenharia de Computação. Vasta experiência acadêmica e comprometimento com o desenvolvimento educacional.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto py-4">
                    <img className="w-full md:w-[300px] h-auto" src="https://media.licdn.com/dms/image/C4D03AQGVSkhxfKvqNg/profile-displayphoto-shrink_200_200/0/1663207414262?e=1712793600&v=beta&t=QFwh89E4gTLD8LdlJlTQ9afXKPfVSE6R40auTacUAa4" alt="" />
                    <div className="space-y-4">
                        <h1 className="font-bold text-xl">Presidente Unilab Student Chapter</h1>
                        <p className="text-gray-700 leading-6">
                            Estudante do 10º semestre de graduação em Engenharia da Computação, demonstrando um percurso acadêmico avançado e sólido conhecimento na área.
                            Comprometido com o aprendizado contínuo e o desenvolvimento de habilidades técnicas. Em constante busca por oportunidades de aplicar conhecimentos
                            teóricos em projetos práticos e desafiantes.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Cards;
