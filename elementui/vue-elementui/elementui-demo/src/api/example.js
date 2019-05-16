import Axios from '@/libs/AxiosPlugin'

// 接口地址
//const BASE_PATH = process.env.API_URL
const BASE_PATH = "/api"

// 用户登录
//export const getList = params => { return Axios.post(`${BASE_PATH}/getList`, params).then(res => res.data); };
export const getList = function (params) {
    return new Promise((resolve, reject) => {
        var res = {
            "code": 200,
            "message": '',
            "data": { 
                "currentPage": 1, 
                "total": 20, 
                "pageSize":20, 
                "items": [
                    { "id": "22000020070625094X", "title": "Yqio ygczogbo btsv jxwrtid awomo assexio udu yfxsvv hqopwkav zwfwojs qbhpsowzne fhfknlsr iwiurudj.", "status": "draft", "author": "name", "display_time": "2013-09-05 02:23:15", "pageviews": 3037 }, 
                    { "id": "530000200505165899", "title": "Vrkjn xmyvp wxxdl rwwqtzh gdmucwcq dsezwqvy okhxmpqg texbvvqt fgnelxtxy xscwhfw depddjgpnn ykoybuedz mzvj ydgllhwp gpccuynk fpuw.", "status": "draft", "author": "name", "display_time": "1986-10-01 16:21:27", "pageviews": 1381 }, 
                    { "id": "340000199609140353", "title": "Umw mkwrchd yelbyycb tdxhbk gxqdujlkde ufaxgu telqsxtgv eqnaif kwonhljbh xdup cyng jbvvc hpppmqayp kmztjdvian jynggpzj.", "status": "draft", "author": "name", "display_time": "1976-05-27 16:46:01", "pageviews": 685 }, 
                    { "id": "710000200405217018", "title": "Pypwpcj mlweeo clxsgplj qnrqlb cwgx uido xmripwfy vgo dkle jkogcru dkbxy dqtedwk.", "status": "deleted", "author": "name", "display_time": "1986-04-10 22:37:05", "pageviews": 1353 }, 
                    { "id": "36000019750816086X", "title": "Gadsayj yicyjuyj kjnosfrf qjyogitn zrzbjlo wbfrvbkn hjbts qiuxredz xcfetaq pjaqaon mxiwhdyl oxhyyi opwup gyipb cczwj rzwop yrvkzw rcgugmpmv.", "status": "deleted", "author": "name", "display_time": "1973-09-18 20:53:44", "pageviews": 4621 }, 
                    { "id": "530000201401105175", "title": "Puv hmghl kwjsifmdn ptvtnrf eqiefcgv dfjqsvo wwlrpcbxs nhuqscxghd rweuhe zdjc gssyfgnb dagpkn ccybyedq gkxyeykd ciiyrkus yshf pdh fgodwhh.", "status": "published", "author": "name", "display_time": "1979-01-14 02:16:09", "pageviews": 1132 }, 
                    { "id": "450000197910300199", "title": "Bloahe vmrlva heeiu czqkshn rkwibry gpeuidyv xmgdrfron vpitwaek jcrirnfnv mmnx bfpyeb sadxbh vmtbu hmyq ngqlcffhv.", "status": "draft", "author": "name", "display_time": "1994-03-06 04:10:46", "pageviews": 407 }, 
                    { "id": "21000019860812880X", "title": "Mnnigqnjg ufo ukovg omjyc xsiylbxoc xjlyhiyks vuindjohdr ddbdcxw djyfumzas knjc pbmfmkyir xkee uluowdno snymf whnut zgchcyjpo.", "status": "deleted", "author": "name", "display_time": "2018-07-30 10:39:27", "pageviews": 658 }, 
                    { "id": "230000201406237643", "title": "Jagbgu gdwya fvrkomxkux owcjjs qqeoobkaw dtnssseu obpvylltx dspm nvooxezc dnnyqbsb kwdl.", "status": "deleted", "author": "name", "display_time": "1974-07-07 17:17:32", "pageviews": 3650 }, 
                    { "id": "370000198410273002", "title": "Vrqmi ghwjeblpy rdgykewwn cueturcwg sjjooxjpg rivmamj kcnbjek trbhxk isxcqtr rmpg hjvebk oxusqmsv eil mdcggc kxknpj kgdi znkfgjixv ccxrar.", "status": "deleted", "author": "name", "display_time": "1997-12-11 04:48:17", "pageviews": 4250 }, 
                    { "id": "520000197911264837", "title": "Ofebjugy rujjfphyud nkjc rsbow ehk cacfdevk vpdzj eppmnmswla whz qwgd frnw vwrs suivfkp eovirhqq onuizmmt iocbzq qsjtfrnvq rzoqrk tgaj.", "status": "draft", "author": "name", "display_time": "1997-09-05 22:51:31", "pageviews": 3500 }, 
                    { "id": "620000199907192183", "title": "Fff fzn ygempfs zpxufsar nhjuem apylpl rotst lxyq aygftgtefk nqwcscj tvjt zpc prjrxbil lrsde wlynfilwx hbqwbmnm jmniigjdv.", "status": "deleted", "author": "name", "display_time": "1970-06-23 17:20:09", "pageviews": 3067 }, 
                    { "id": "350000201401112494", "title": "Itbykg ixjlmp hww byksh tcxzwvixi vymlkfckx hofksm gojh teccisvp jhqhj vtrhywo iseypfg royqe vly qefm sdptqelp tjhp lcaxkl towclimkez.", "status": "draft", "author": "name", "display_time": "1992-11-12 01:31:19", "pageviews": 1138 }, 
                    { "id": "530000201007099117", "title": "Mwmpol vcxjulqsq fydf pine jgepwqs rkftirop pnn yeoxubqk alkuvhfg xgcxy vkedpwvu vrqrxippl uputbldyrs mjxapm ngtghfzk vszcda healhakol.", "status": "published", "author": "name", "display_time": "1991-09-25 20:44:56", "pageviews": 1823 }, 
                    { "id": "32000019810716674X", "title": "Jkhukh tdrvtnbhk rupudyq rietvci fzckgxl mrftslmp ixdukpf hjuhgtlxs svhl zerv jsedhhn pab qgiozykhh.", "status": "deleted", "author": "name", "display_time": "2010-03-05 08:34:42", "pageviews": 3648 }, 
                    { "id": "610000199802256943", "title": "Vlljyivd lwxsgulmv tniq useyye jnp gcrplkxx utzzkgul bwfx ixik dscror fwcpsuoc.", "status": "draft", "author": "name", "display_time": "1997-08-12 16:28:34", "pageviews": 4422 }, 
                    { "id": "420000199104277848", "title": "Yezfty xjrufprfmz ysnfollbc jajn qnwpe vgxlmahn stbvecw opjwx nygmgk rgsdw ozows fzxvfvzhp zgjmmobw chalku aur ndo rbinzr.", "status": "deleted", "author": "name", "display_time": "1996-12-22 05:40:55", "pageviews": 4042 }, 
                    { "id": "210000200103167467", "title": "Tukqglex wic zjvw kzblhykei xuhgyuxc lkwple dnmjk omintgls aclgkjmzj ilabw ymqxp ypdw.", "status": "deleted", "author": "name", "display_time": "1981-09-01 13:50:04", "pageviews": 3833 }, 
                    { "id": "370000201801147737", "title": "Khce kllcjwmw douu lebavu fkfuokkjq lycqo kdregussp ivteq prj ljcjqt bondvqt dgyz.", "status": "deleted", "author": "name", "display_time": "2011-10-27 06:02:43", "pageviews": 2610 }, 
                    { "id": "440000199401261029", "title": "Poj otkm lgmktx ombyixpt bpn ges oecgnju jrscl vesovjfig uuww izlwoukt ttlqfjwvc uschkbaxu gcsxyjr olwtlfmz fsfwnhdm dbuxqqk zxjsz.", "status": "draft", "author": "name", "display_time": "2018-01-13 07:52:23", "pageviews": 4551 }
                ] 
            }
        }
        resolve(res);
    });
} 