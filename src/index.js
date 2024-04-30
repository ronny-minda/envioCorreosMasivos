import path from "path";
import nodemailer from "nodemailer";

// const correos = [
//   // "seleccioncamaronerath@gmail.com",
//   // "hcastroa@santa-priscila.com",
//   // "seleccion@grupoalmar.com.ec",
//   // "seleccion@naturisa.com.ec",
//   // "seleccioncofimar@cofimar.com.ec",
//   // "efuentesf@cofimar.com.ec",
//   // "seleccionpersonal@marycielo.com.ec",
//   // "dcoronel@promarisco.com",
//   // "emparraleso@promarisco.com",
//   // "seleccion@grupodiosmar.com",
//   // "talentohumano@grupofajardo.com.ec",
//   // "asistenterrhh@docapes.com",
//   // "gmosquera@segesa.com.ec",
//   // "tthhexporcareca@hotmail.com",
//   // "info@aquasv.com",
//   // "seleccion@gvasco.com",
//   // "seleccion_rrhh@expalsa.com",
//   // "info@fundametz.com",
//   // "selecciontoni@tonicorp.com",
//   // "seleccion@corpfernandez.com",
//   // "seleccionecuador.b@gmail.com",
//   // "talentohumano.seleccion@hotmail.com",
//   // "ATseleccion@atimasa.com.ec",
//   // "seleccionpersonal.costa@iess.gob.ec",
//   // "Rojasg@novacero.com",
//   // "tia.ecuador@hotmail.com",
//   // "cieflor.munoz@gmail.com",
//   // "lucy.arevalo@inalecsa.com",
//   // "info@lonchys.com",
//   // "rrhh@supereasy.ec",
//   // "seleccion@inalecsa.com",
//   // "h2r.cv-ecu@holcim.com",
//   // "Lilian.parraga@skretting.com",
//   // "miryan.loza@skretting.com",
//   // "equipo@sweetandcoffee.com.ec",
//   // "Domenica.villagomez@ec.nestle.com",
//   // "wperez@mavesa.com.ecF",
//   // "empleo@compu-tron.net",
//   // "eugenia.cegarra@co.bosch.com",
//   // "mmayorga@interagua.com.ec",
//   // "reclutamiento-ecuador@disensa.com",
//   // "rrhh1@grifine.ec",
//   // "rrhh@labraquelabra.com",
//   // "info@fundametz.com",
//   // "Domenica.villagomez@ec.nestle.com",
//   // "wperez@mavesa.com.ec",
//   // "mmayorga@interagua.com.ec",
//   // "emacias@manpowergroup.ec",
//   // "ddhh.seleccion@hotmail.com",
//   // "selecciontoni@tonicorp.com",

//   "seleccion@grupodifare.com",
//   "katherine.iturralde@arcacontal.com",
//   "lucy.arevalo@arcacontal.com",
//   "rrhh@dimetal-ec.com",
//   "pdominguez@albystore.com",
//   // "seleccion@pycca.com",
//   "jguerrero@pika.com.ec",
//   "ivelez@poligrup.ec",
//   "rrhh@superexito.com.ec",
//   "mdiaz@fadesa.com",
//   "seleccion@gurpodifare.com",
//   "seleccion@fenalcosolidario.com",
//   "eduardo.castro@grupodifare.com",
//   "talento@edimca.com.ec",
//   "seleccion@inproel.com",
//   "seleccion@torresytorres.com",
//   "lalbornoz@negoplus.com.ec",
//   "kisa@emsaec.com",
//   "mleon@papelesa.com",
//   "seleccionagripac@agripac.com.ec",
//   "reclutamiento@senefelder.com",
//   "seleccion@skretting.com",
//   "Selecciongyesur@tuti.com.ec",
//   "Seleccion@reysac.com",
//   "seleccion.gye@pizzahut.com.ec",
//   "talentohumanopapelesa@papelesa.com",
//   "seleccion@homenet.ec",
//   "seleccion_guayaquil2023@kywi.com.ec",
//   "Wingers.personal@outlook.com",
//   "Seleccion.gye@dulcesonrisa.ec",
//   "Recursoshumanos3@isratech.com.ec",
//   "coordinaciontalentohumano@comsucre.com",
//   "seleccionpersonal@adelca.com",
//   "e.seleccion@yupi.com.com",
//   "Talentohumano@elsanduchon.com",
//   "Seleccion@corpfernandez.com",
//   "Dnarvaez@facilito.com.ec",
//   "rrhh@andigrain.com",
//   "talentoydesarrolo.beverage@gmail.com",
//   "Recursoshumanos@prodicereal.com.ec",
//   "Aplicaconmigohoy@gmail.com",
//   "Seleccion@la-llave.com",
//   "Kerly.vera@grupodifare.com",
//   "Seguridadintegralc4@hotmail.com",
//   "Msa.coorporativo@gmail.com",
//   "Rrhh@superexito.com.ec",
//   "Seleccion.personal@kfc.com.ec",
//   "Basampedro@gerardoortiz.com",
//   "Fherrera@solutocg.com",
//   "Lacurvadelsabor.ec@gmail.com",
//   "Talentohumano.ew@gmail.com",
//   "Uneteanuestroequipo@ec.marathon-sports.com",
//   "Seleccion@dunkinec.com",
//   "seleccion@foodpacking.ec",
//   "Seleccion@pika.com.ec",
//   "talentohumanocurriculum2023@gmail.com",
//   "multiempresasgye.ec@gmail.com",
//   "seleccion@ec.g4s.com",
//   "seleccionsacoplast@sacoplast.com.ec",
//   "claudiac.vazquez@tonicorp.com",
//   "procesos.selecciontoni@tonicorp.com",
//   "recursoshumanos@nikamar.com",
//   "recursoshumanos.galapesca@starkist.com",
//   "aconstante@pinto.com.ec",
//   "recursoshumanos@papajohns.com.ec",
//   "procesoceleccion@tonicorp.com",
//   "talentohumano@gruposepro.com.ec",
//   "postulacionsabfran@gmail.com",
//   "selecciongrupomavesa@mavesa.com.ec",
//   "seleccion@fadesa.com.ec",
//   "coordinacion@litransa.com.ec",
//   "reclutamiento@interagua.com.ec",
//   "Seleccion@tuti.com.ec",
//   "daniela.flores@grupodifare.com",
//   "acabezas@fadesa.com",
//   "pccarrion@telconet.ec",
//   "Seleccion.guayaquil@kfc.com.ec",
//   "talentohumano@kaosport.com",
//   "consultoria@hc-bc.com.ec",
//   "talento@marielaludena.com",
//   "Coordinacion.th@insulmedec.com",
//   "thgestiondeltalento@gmail.com",
//   "seleccionmasiva2023@gmail.com",
//   "redesregalosimport@gmail.com",
//   "gacastro@saludsa.com.ec",
//   "selecciontthh.agp@gmail.com",
//   "exactocargaguayaquil@gmail.com",
//   "smazon@ayasa.com.ec",
//   "seleccion@celco.com.ec",
//   "irma.alban@holcim.com",
//   "jeyson.medina@procarsa.com.ec",
//   "Kenya.Vazquez@mann-hummel.com",
//   "Consultoraseleccion21@gmail.com",
//   "reclutamiento@proexpo.com.ec",
//   "diana.alcivar@grupoberlin.com",
//   "aortega@empacreci.com.ec",
//   "seleccion@limbomar.com.ec",
//   "seleccion@degeremcia.com",
//   "seleccion@santa-priscila.com",
//   "maria.saldes@skretting.com",
//   "maria.soriano@skretting.com",
//   "maria.carrasco@tonicorp.com",
//   "valeria.chong@skretting.com",
//   "valeria.mora@intaco.com",
//   "rommel.gallegos@holcim.com",
//   "th@megametales.com.ec",
//   "talentohumano@exportquilsa.com",
//   "seleccion.administra@omarsa.com.ec",
//   "carlos.decker@skretting.com",
//   "denisse.diaz@skretting.com",
//   "ginger.gomez@skretting.com",
//   "lilian.parraga@skretting.com",
//   "CSantacruzI@vitapro.com.ec",
//   "balvarado@omarsa.com.ec",
//   "mconchac@vitapro.com.ec",
//   "atencionenlinea@grupobimbo.com",
//   "sgomez@joven360.com",
// ];

const correos = ["talentohumano@exportquilsa.com"];

const contador = 0;

// Obtener la ruta del directorio de trabajo actual del proceso Node.js
const currentWorkingDirectory = process.cwd();

// Construir la ruta del archivo desde la raíz del proyecto
const filePath = path.join(
  currentWorkingDirectory,
  "/src/archivos/RONNY MICHAEL MINDA VERA CV.pdf"
);

const envioCorreo = async (correoDestinatario, ruta) => {
  const contentHTML = `<table width="100%" cellspacing="0" cellpadding="0" role="none" style="border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#fafafa">
  <tbody><tr height="0">
   <td style="padding:0;Margin:0">
    <table cellpadding="0" cellspacing="0" border="0" align="center" role="none" style="border-collapse:collapse;border-spacing:0px;width:600px">
      <tbody><tr>
       <td cellpadding="0" cellspacing="0" border="0" height="0" style="padding:0;Margin:0;line-height:1px;min-width:600px"><img src="https://ci3.googleusercontent.com/meips/ADKq_Nae0WXOOzWr8r4cq9XmD_OqvNanyFIgdGlfybtEHddiO5BjpEsdLPwp_e9rXIJl77sVZDTzg4-Ggi41k82pl2Enw9ipJQGPa-fTEzqTSemcMj2_=s0-d-e1-ft#https://esputnik.com/repository/applications/images/blank.gif" width="600" height="1" style="display:block;border:0;outline:none;text-decoration:none;max-height:0px;min-height:0px;min-width:600px;width:600px" alt="" class="CToWUd" data-bit="iit"></td>
      </tr>
    </tbody></table></td>
  </tr>
  <tr>
   <td valign="top" style="padding:0;Margin:0">
    <table cellspacing="0" cellpadding="0" align="center" role="none" style="border-collapse:collapse;border-spacing:0px;table-layout:fixed!important;width:100%">
      <tbody><tr>
       <td align="center" style="padding:0;Margin:0">
        <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px">
          <tbody><tr>
           <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
            <table width="100%" cellspacing="0" cellpadding="0" role="none" style="border-collapse:collapse;border-spacing:0px">
              <tbody><tr>
               <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
                  <tbody><tr>
                   <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>Estimado equipo de reclutamiento,</strong></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px">Adjunto encontrarán mi hoja de vida, la cual resalta mi experiencia de más de 3 años como desarrollador de software, especializado en el FrontEnd con tecnologías como React, Next.js, React Query, Redux, Zustand, y GraphQL Apollo Client, así como en el BackEnd con Node Nest JS, middleware, Express, Bcrypt, y GraphQL Apollo Server. Además, poseo habilidades sólidas en el uso de Git y GitHub, Metodologías Agiles y Pruebas Unitarias.</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px">Te invito a visitar mi web profesional <a href="https://ronnyminda.vercel.app/trabajos" style="text-decoration:underline;color:#5c68e2;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://ronnyminda.vercel.app/trabajos&amp;source=gmail&amp;ust=1713363379259000&amp;usg=AOvVaw1nk1b8FpGHqdUGnC8H6ETc">https://ronnyminda.vercel.app/<wbr>trabajos</a> donde podrás conocer más sobre mi trabajo y proyectos.</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px">Destaco también mi experiencia en el desarrollo UX/UI, la cual ha sido parte integral de mis contribuciones profesionales y profesionales.</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px">Estoy convencido de que mi experiencia y habilidades se alinean estrechamente con los requisitos de su empresa. Estoy emocionado ante la posibilidad de contribuir al equipo de sistemas y estoy seguro de que mi combinación de habilidades y experiencia serán un activo valioso para su equipo.</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px">Quedo a su disposición para discutir cómo mi experiencia puede contribuir al éxito de su equipo.</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px">Saludos cordiales,</p></td>
                  </tr>
                </tbody></table></td>
              </tr>
            </tbody></table></td>
          </tr>
        </tbody></table></td>
      </tr>
    </tbody></table>
    <table cellspacing="0" cellpadding="0" align="center" role="none" style="border-collapse:collapse;border-spacing:0px;table-layout:fixed!important;width:100%">
      <tbody><tr>
       <td align="center" style="padding:0;Margin:0">
        <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px">
          <tbody><tr>
           <td align="left" style="padding:20px;Margin:0">
            <table cellspacing="0" cellpadding="0" align="left" role="none" style="border-collapse:collapse;border-spacing:0px;float:left">
              <tbody><tr>
               <td align="left" style="padding:0;Margin:0;width:250px">
                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
                  <tbody><tr>
                   <td style="padding:0;Margin:0;font-size:0px" align="left"><img src="https://ci3.googleusercontent.com/meips/ADKq_NabwdgZ18uNnBuGUwI1iRH_wtgbVRsmnwxyU0ZcednX37xUFUEvH2iTX-4yywQn_tClIXODLmgH_E265LqV2_zeIscR3A5_A5Navh9nUY_uuoTQFxEaq0AvjuY1n4k773pnK0joG2XEhtPPQh7vIhiOuULfcD2vI4LURVizlNkPgylAVSDozWbHnvxDhjFsbqWmzK2WC9HHOH7kyTo=s0-d-e1-ft#https://ucbcri.stripocdn.email/content/guids/CABINET_6c0d8135ffe5c6648614602aca066c94ee1f8fb1727ea693228620eeb01cbdfc/images/frima.png" alt="" style="display:block;border:0;outline:none;text-decoration:none" width="186" class="CToWUd" data-bit="iit"></td>
                  </tr>
                </tbody></table></td>
              </tr>
            </tbody></table>
            <table cellspacing="0" cellpadding="0" align="left" role="none" style="border-collapse:collapse;border-spacing:0px;float:left">
              <tbody><tr>
               <td align="left" style="padding:0;Margin:0;width:96px">
                <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0px;border-radius:50px" role="presentation">
                  <tbody><tr>
                   <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0px" align="center"><img src="https://ci3.googleusercontent.com/meips/ADKq_NYAvPAlLLkAwClX9wDbijH9lpl6Oc8NN1ZtXUyQb2HvfWuoHdbUj3OPhqXblq_2cdwy_NMLer7TwmLpOOiqTiSc1AAwfg5kuYhlfWn9afNvYPxo_SqGzvKs70YXGnLcl5_0FqKzebn6NXHyOu4AO7Zf2uNHeBFZZ6GzctOKIC7PIUMknFskSSfpipUd3deHe3bciKabQ-GG9Wo02dokTWE=s0-d-e1-ft#https://ucbcri.stripocdn.email/content/guids/CABINET_6c0d8135ffe5c6648614602aca066c94ee1f8fb1727ea693228620eeb01cbdfc/images/descarga.png" alt="" style="display:block;border:0;outline:none;text-decoration:none" width="96" class="CToWUd" data-bit="iit"></td>
                  </tr>
                </tbody></table></td>
              </tr>
            </tbody></table>
            <table cellspacing="0" cellpadding="0" align="right" role="none" style="border-collapse:collapse;border-spacing:0px;float:right">
              <tbody><tr>
               <td align="left" style="padding:0;Margin:0;width:174px">
                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
                  <tbody><tr>
                   <td align="left" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:30px;font-family:arial,'helvetica neue',helvetica,sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">Ronny Minda V.</h3><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px">Software Developer</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px">0993105654</p><p style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333;font-size:14px"><a href="mailto:ronny.minda.vera@gmail.com" style="text-decoration:underline;color:#040404;font-size:14px" target="_blank">ronny.minda.vera@gmail.com</a></p></td>
                  </tr>
                  <tr>
                   <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0" align="left">
                    <table cellspacing="0" cellpadding="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
                      <tbody><tr>
                       <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a href="https://www.linkedin.com/in/ronnyminda/" style="text-decoration:underline;color:#5c68e2;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/in/ronnyminda/&amp;source=gmail&amp;ust=1713363379259000&amp;usg=AOvVaw20fvXFrz3pu07wnvjTmYeF"><img title="Linkedin" src="https://ci3.googleusercontent.com/meips/ADKq_NZ0nc_6iZJ9axOcdvy3y0_vSFWKMjXHeDAN2D388wtpaZE1h2lvZIctDKUTONMt-hbkQkBC6fMwD8GAA3UxRB8LAoSd9c-0BA43yrl0KdFWt4UaIt99FGJXuCW_S-DISKJtaZDFkNSuPJS3lt9NNGbuGlmC2li7=s0-d-e1-ft#https://ucbcri.stripocdn.email/content/assets/img/social-icons/logo-black/linkedin-logo-black.png" alt="In" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                       <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a href="mailto:?subject=contrato" style="text-decoration:underline;color:#5c68e2;font-size:14px" target="_blank"><img title="Email" src="https://ci3.googleusercontent.com/meips/ADKq_Na7gvfH7wXbEUhpru70eaF6unjb1rm25dQ5gOsJ-J_d2Ump13E0ytpV0pAPFtQ8FtjGrBCu7U4kP9qtLcvwxaiUITlGo1psaUZU94LD01rRxZS-VT5uqYRQvgp0bZD90wJ4kHNdeHm7KdG6KjfnSmoEvA=s0-d-e1-ft#https://ucbcri.stripocdn.email/content/assets/img/other-icons/logo-black/mail-logo-black.png" alt="Email" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;font-size:12px" class="CToWUd" data-bit="iit"></a></td>
                       <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a href="https://github.com/ronny-minda" style="text-decoration:underline;color:#5c68e2;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://github.com/ronny-minda&amp;source=gmail&amp;ust=1713363379259000&amp;usg=AOvVaw2LNGPTjRXo6cdTsenEI5u_"><img title="GitHub" src="https://ci3.googleusercontent.com/meips/ADKq_NbR-svFFEG4Kfmtb3l7OJf_uMLPEu9FLnGUebAKbg25eoBO4U_gybbiCsE9lX0OP377_5ePfZHPOgyPexdOl-ufGSKyU19rrPDPhzq1H3tH8CfQA7yR7tQeuA_beb-ijLms8ynXOioGBiwvFUQsjn29StWd=s0-d-e1-ft#https://ucbcri.stripocdn.email/content/assets/img/other-icons/logo-black/github-logo-black.png" alt="GitHub" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                       <td valign="top" align="center" style="padding:0;Margin:0"><a href="tel:0993105654" style="text-decoration:underline;color:#5c68e2;font-size:14px" target="_blank"><img title="Phone" src="https://ci3.googleusercontent.com/meips/ADKq_Na4MQL8_kG6ROiPbr06YxXZO8dqxto8aG1hWn02pDcbqt1toYO9XImg2Yfg4LSk-b78mY1idqHL0KhbVFWnL5wTq7nqNUFldurUETz8bjchpKI2pdQ9llF0Wyk7rO9IEf2O1m6GV1KkiS4RHRt1r_81E7c=s0-d-e1-ft#https://ucbcri.stripocdn.email/content/assets/img/other-icons/logo-black/phone-logo-black.png" alt="Phone" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                      </tr>
                    </tbody></table></td>
                  </tr>
                </tbody></table></td>
              </tr>
            </tbody></table></td>
          </tr>
        </tbody></table></td>
      </tr>
    </tbody></table></td>
  </tr>
</tbody></table>`;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ronny.minda.vera@gmail.com",
      pass: "pxqf ypmt etpk ncol",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: '"ronny minda" <ronny.minda.vera@gmail.com>', // sender address,
    // to: "ronny.minda.vera@gmail.com", //<-- a quien se envia.
    to: correoDestinatario, //<-- a quien se envia.
    subject: "TÈCNICO DE SOPORTE TI - SISTEMAS",
    // text: 'Hello World'
    html: contentHTML,
    attachments: [
      {
        filename: "RONNY MICHAEL MINDA VERA CV.pdf",
        path: ruta,
        contentType: "application/pdf",
      },
    ],
    // function(err, info) {

    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log(`Envio exito a este correo ${correoDestinatario}`);

    //     contador++;

    //     const correoActual = correos[contador];

    //     if (correoActual !== undefined) {
    //       // console.log(info);
    //       envioCorreo(correoActual);
    //     }
    //   }
    // },
  });

  console.log(`Envio exito a este correo ${correoDestinatario}`);

  // console.log(contentHTML);
  // console.log(info);

  // res.status(200).send({ success: true });
  // console.log("sent response");
};

// fpzc vqhi zomz vzwo

// console.log(filePath);

// envioCorreo(correos[0]);

// correos.map((value) => {
//   envioCorreo(value, filePath);
// });

correos.forEach((value, index) => {
  setTimeout(() => {
    envioCorreo(value, filePath);
  }, index * 10000); // Cambia el valor de 1000 a la cantidad de milisegundos que desees entre cada llamada
});
