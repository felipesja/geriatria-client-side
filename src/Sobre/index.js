import React from 'react';
import './index.css';
import fachadaImg from './img/fachada.jpg'; // Renomeie conforme o arquivo real
import evento1Img from './img/evento1.jpg'; // Renomeie conforme o arquivo real
import evento2Img from './img/evento2.jpg'; // Renomeie conforme o arquivo real

function Sobre() {
  return (
    <section className="sobre-section quem-somos-section">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h2 className="sobre-titulo">Quem Somos</h2>
          <p>
            O Lar Geriátrico Coração de Maria foi fundado em 2 de janeiro de 1988, no bairro do Lins de Vasconcelos, Rio de Janeiro. Desde sua criação, tem sido um verdadeiro refúgio de carinho, cuidado e dignidade para idosos que necessitam de atenção especializada e um ambiente acolhedor.
          </p>
          <p>
            Inspirado por valores cristãos e humanitários, o Lar nasceu do desejo de oferecer uma casa segura, onde os idosos pudessem viver com respeito, amor e assistência integral.
          </p>
          <p>
            Ao longo de mais de três décadas, consolidou-se como referência regional pela qualidade dos serviços e vínculo afetivo com residentes e famílias. O Lar se modernizou, ampliou sua estrutura e profissionalizou sua equipe, sem perder sua essência: acolher com o coração.
          </p>
        </div>
        <div className="sobre-imagens">
          <img src={fachadaImg} alt="Fachada do Lar Geriátrico Coração de Maria" className="sobre-img" />
          <img src={evento1Img} alt="Evento com residentes" className="sobre-img" />
          <img src={evento2Img} alt="Confraternização dos residentes" className="sobre-img" />
        </div>
      </div>

      <div className="sobre-container sobre-missao-valores">
        <div className="sobre-texto">
          <h2 className="sobre-titulo" style={{marginTop: '36px'}}>Missão</h2>
          <p>
            Proporcionar um ambiente seguro, acolhedor e humanizado, garantindo assistência integral e de qualidade aos idosos, respeitando sua dignidade, autonomia e necessidades individuais, por meio de uma equipe qualificada e comprometida com o bem-estar e a qualidade de vida dos residentes.
          </p>

          <h2 className="sobre-titulo sobre-titulo-valores">Valores</h2>
          <div className="valores-grid">
            <div className="valores-grid-item">
              <h3>Respeito à Dignidade</h3>
              <p>Valorizamos cada idoso como ser humano único, respeitando sua história, autonomia e escolhas.</p>
            </div>
            <div className="valores-grid-item">
              <h3>Ética e Transparência</h3>
              <p>Atuamos com responsabilidade, honestidade e respeito, mantendo um relacionamento claro e confiável com idosos e familiares.</p>
            </div>
            <div className="valores-grid-item">
              <h3>Humanização no Atendimento</h3>
              <p>Oferecemos cuidados com empatia, carinho e atenção, garantindo um ambiente acolhedor e afetivo.</p>
            </div>
            <div className="valores-grid-item">
              <h3>Trabalho em Equipe</h3>
              <p>Valorizamos a colaboração entre profissionais de diferentes áreas para oferecer um cuidado integral e eficiente.</p>
            </div>
            <div className="valores-grid-item">
              <h3>Compromisso com a Qualidade</h3>
              <p>Buscamos excelência na assistência prestada, promovendo bem-estar físico, emocional e social.</p>
            </div>
            <div className="valores-grid-item">
              <h3>Inclusão e Diversidade</h3>
              <p>Respeitamos a individualidade e promovemos a convivência harmoniosa entre todos os idosos, independentemente de suas diferenças.</p>
            </div>
            <div className="valores-grid-item">
              <h3>Segurança e Cuidado</h3>
              <p>Garantimos um ambiente seguro e estruturado para atender às necessidades dos residentes.</p>
            </div>
            <div className="valores-grid-item">
              <h3>Inovação e Melhoria Contínua</h3>
              <p>Buscamos sempre aperfeiçoar nossos serviços, adotando novas práticas e tecnologias para otimizar o cuidado aos idosos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sobre-container sobre-profissionais-servicos">
        <div className="sobre-texto">
          <h2 className="sobre-titulo">Profissionais e Serviços</h2>
          <div className="profissionais-float-wrapper">
            <img src={require('./img/profissionais.jpg')} alt="Equipe e residentes em confraternização" className="sobre-img profissionais-img-float" />
            <p>
              Contamos com uma equipe completa e dedicada para oferecer cuidado integral aos nossos residentes. Nosso time é formado por médico responsável, enfermeira, assistente social, fisioterapeuta, terapeuta ocupacional, nutricionista e psicóloga, além de seis técnicos de enfermagem, dois auxiliares de enfermagem e oito cuidadoras que garantem atenção e acompanhamento diários.
            </p>
            <p>
              Juntos, nossos profissionais trabalham de forma integrada para promover qualidade de vida, bem-estar e segurança, sempre com o compromisso de cuidar com respeito, carinho e dedicação.
            </p>
            <p>
              O Lar Geriátrico Coração de Maria adota um Plano de Atenção Integral à Saúde (PIA), com avaliação anual registrada no prontuário de cada residente. Os idosos têm acesso a serviços públicos ou privados, conforme suas necessidades, e as prescrições de médicos particulares são respeitadas, salvo em emergências, quando as condutas são comunicadas aos familiares.
            </p>
            <p>
              Seguimos protocolos de cuidado, mantemos vacinas atualizadas e o controle rigoroso de medicamentos. Em casos de urgência, o transporte é feito por ambulância particular ou pelo SAMU. Também oferecemos acesso a serviço odontológico terceirizado, sempre que necessário.
            </p>
          </div>
        </div>
      </div>

      <div className="sobre-container sobre-infraestrutura-fisica">
        <div className="sobre-texto">
          <h2 className="sobre-titulo">Infraestrutura Física</h2>
          <p>
            O Lar Geriátrico Coração de Maria oferece uma infraestrutura completa e adaptada para garantir conforto, segurança e bem-estar aos residentes. Nossas instalações contam com quartos individuais e coletivos, enfermarias, suítes, áreas de convivência, refeitório, jardim e espaços para atividades recreativas e terapêuticas.
          </p>
          <p>
            Todos os ambientes são planejados para promover acessibilidade, mobilidade e autonomia, com barras de apoio, rampas, iluminação adequada e sinalização. A limpeza, organização e manutenção são realizadas diariamente, seguindo rigorosos padrões de higiene e segurança.
          </p>
          <div className="infraestrutura-imagens">
            <img src={require('./img/infra1.jpg')} alt="Infraestrutura 1" className="infra-img" />
            <img src={require('./img/infra2.jpg')} alt="Infraestrutura 2" className="infra-img" />
            <img src={require('./img/infra3.jpg')} alt="Infraestrutura 3" className="infra-img" />
          </div>
        </div>
      </div>

      {/* Seção Por Que Apoiar */}
      <div className="sobre-por-que-apoiar">
        <div className="sobre-por-que-apoiar-texto">
          <h2 className="sobre-por-que-apoiar-titulo">Por Que Apoiar</h2>
          <p>
            O Lar Geriátrico Coração de Maria é uma instituição sem fins lucrativos que depende da solidariedade de pessoas e empresas para continuar oferecendo cuidado, dignidade e qualidade de vida aos idosos. Seu apoio é fundamental para manter e aprimorar nossos serviços, garantir alimentação adequada, medicamentos, atividades terapêuticas e uma infraestrutura segura e acolhedora.
          </p>
          <p>
            Ao apoiar o Lar, você contribui diretamente para transformar vidas, promover inclusão social e valorizar a experiência e a história de cada residente. Junte-se a nós nessa missão de amor e cuidado!
          </p>
        </div>
        <div className="sobre-por-que-apoiar-img-wrapper">
          <img src={require('./img/apoio.jpg')} alt="Apoie o Lar Geriátrico" className="sobre-por-que-apoiar-img" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
