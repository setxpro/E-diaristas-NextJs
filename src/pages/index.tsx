import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnviroment from "../ui/components/feedback/SafeEnviroment/SafeEnviroment";

import TextFieldMask  from "ui/components/Inputs/TextFieldMask/TextFieldMask";
import { FormElementsContainer, ProfissionaisContainer, ProfissionaisPaper } from "@styles/pages/index.style"; 
import { Button, Typography, Container, CircularProgress } from '@material-ui/core';

import useIndex from "data/hooks/pages/useIndexPage";

export default function Home() {

  const { cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes } = useIndex();

  return (
  <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subTitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

    <Container>
      <FormElementsContainer>
        <TextFieldMask
          mask={'99.999-999'}
          label={'Digite seu CEP'}
          fullWidth
          variant={'outlined'}
          value={cep}
          onChange={ event => setCep(event.target.value) }
        />
        {erro && <Typography color={'error'}>{erro}</Typography>}
        <Button
          variant={'contained'}
          color={'secondary'}
          sx={{ width: '220px' }}
          disabled={!cepValido || carregando}
          onClick={() => buscarProfissionais(cep)}>

            { carregando ?  <CircularProgress size={20}/> : 'Buscar'}
       
        </Button>
      </FormElementsContainer>

          { buscaFeita && (diaristas.length > 0 ? 

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            
           {diaristas.map((item, indice) => {
             return <UserInformation
                key={indice}
                name={item.nome_completo}
                picture={item.foto_usuario}
                rating={item.reputacao}
                description={item.cidade}
            />
           })}
          </ProfissionaisContainer>
          <Container sx={{textAlign: 'center'}}>
            { diaristasRestantes > 0 && (

              <Typography sx={{ mt: 5 }}>
                ...e mais { diaristasRestantes } 
                          { diaristasRestantes > 1 
                          ? ' profissionais que atendem' 
                          : ' profissional que atende'}  ao seu endereço.
              </Typography>

            ) }
            <Button 
            variant={'contained'}
            color={'secondary'} 
            sx={{ mt: 5 }}
            >
              Contratar um profissional</Button>
          </Container>
      </ProfissionaisPaper> 
        :
        (
          <Typography align={'center'} color={'textPrimary'}>
            Ainda não temos nenhuma diarista disponivel na sua região
          </Typography>
        ) 
      )}
        
    </Container>
  </div>
  );
}
