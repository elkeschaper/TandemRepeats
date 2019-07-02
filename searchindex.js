Search.setIndex({envversion:47,filenames:["background","code_docs","configure","contribute","contributors","cphmm","denovo","easy_setup","index","install","install_containerized","install_external","overlap_filtering","pvaluefiles","search_hmm","significance_test","technical_backbone","tral/hmm","tral/repeat","tral/repeat_list","tral/search","tral/sequence","workflow"],objects:{"tral.hmm":{hmm:[17,0,0,"-"],hmm_io:[17,0,0,"-"],hmm_own_model:[17,0,0,"-"],hmm_viterbi:[17,0,0,"-"]},"tral.hmm.hmm":{HMM:[17,1,1,""],hmmer3_emission_probabilities:[17,5,1,""]},"tral.hmm.hmm.HMM":{"__str__":[17,2,1,""],alphabet:[17,3,1,""],create:[17,4,1,""],create_from_repeat:[17,4,1,""],get_direct_transition_probabilities_for_deletions:[17,2,1,""],hmm_example:[17,2,1,""],hmmer:[17,3,1,""],id:[17,3,1,""],initialise_HMM_structure:[17,2,1,""],insertion_states:[17,3,1,""],l_effective:[17,3,1,""],match_states:[17,3,1,""],p_0:[17,3,1,""],p_e:[17,3,1,""],p_t:[17,3,1,""],read:[17,4,1,""],set_circle_transition_probability_hmmer3:[17,2,1,""],set_emission_probability_hmmer3:[17,2,1,""],set_transition_probability_hmmer3:[17,2,1,""],states:[17,3,1,""],write:[17,2,1,""]},"tral.hmm.hmm_io":{read:[17,5,1,""],read_HMMER_acc_lengths:[17,5,1,""],split_HMMER3_file:[17,5,1,""],to_fixed_width:[17,5,1,""],write_HMMER:[17,5,1,""]},"tral.hmm.hmm_own_model":{HMM:[17,1,1,""],TR:[17,1,1,""],calculate_MAP_Indel_length_Zipfian_factor:[17,5,1,""],calculate_MAP_Indel_length_exponential_factor:[17,5,1,""],calculate_MAP_indel_rate:[17,5,1,""],calculate_log10_indel_probability:[17,5,1,""],calculate_log10_probability_indel_lengths:[17,5,1,""],derivative_log_posterior:[17,5,1,""],divergence_from_FP_simulations:[17,5,1,""],hmmer3_emission_probabilities:[17,5,1,""],loglikelihood_substitution:[17,5,1,""],test:[17,5,1,""]},"tral.hmm.hmm_own_model.HMM":{HMM_from_TR:[17,2,1,""],HMM_from_TR_One_step:[17,2,1,""],HMM_from_file:[17,2,1,""],initialise_HMM_structure:[17,2,1,""]},"tral.hmm.hmm_viterbi":{distance_index:[17,5,1,""],hmm_path_to_aligned_tandem_repeat_units:[17,5,1,""],hmm_path_to_maximal_complete_tandem_repeat_units:[17,5,1,""],hmm_path_to_non_aligned_tandem_repeat_units:[17,5,1,""],logodds:[17,5,1,""],probability_of_the_former_state:[17,5,1,""],viterbi:[17,5,1,""],viterbi_with_prob:[17,5,1,""]},"tral.repeat":{repeat:[18,0,0,"-"],repeat_align:[18,0,0,"-"],repeat_exon:[18,0,0,"-"],repeat_io:[18,0,0,"-"],repeat_pvalue:[18,0,0,"-"],repeat_score:[18,0,0,"-"]},"tral.repeat.repeat":{Repeat:[18,1,1,""],calculate_position_in_alignment:[18,5,1,""]},"tral.repeat.repeat.Repeat":{"__str__":[18,2,1,""],calc_index_msa:[18,2,1,""],calc_n_effective:[18,2,1,""],calculate_pvalues:[18,2,1,""],calculate_scores:[18,2,1,""],create:[18,2,1,""],delete_insertion_columns:[18,2,1,""],gap_structure:[18,2,1,""],gap_structure_HMM:[18,2,1,""],l_effective:[18,3,1,""],l_msa:[18,3,1,""],msa:[18,3,1,""],msaT:[18,3,1,""],msa_original:[18,3,1,""],n:[18,3,1,""],n_effective:[18,3,1,""],n_gaps:[18,3,1,""],realign_TR:[18,2,1,""],repeat_region_length:[18,3,1,""],save_original_msa:[18,2,1,""],sequence_type:[18,3,1,""],text:[18,3,1,""],write:[18,2,1,""]},"tral.repeat.repeat_align":{realign_repeat:[18,5,1,""],remove_char:[18,5,1,""],remove_gaps:[18,5,1,""]},"tral.repeat.repeat_exon":{get_exon_measures:[18,5,1,""],get_exon_structure:[18,5,1,""],logger:[18,6,1,""],print_exon_structure:[18,5,1,""]},"tral.repeat.repeat_io":{evolved_tandem_repeats:[18,5,1,""],random_sequence:[18,5,1,""],read_fasta:[18,5,1,""],save_repeat_fasta:[18,5,1,""],save_repeat_stockholm:[18,5,1,""],save_repeat_treks:[18,5,1,""]},"tral.repeat.repeat_pvalue":{calc_pvalues:[18,5,1,""],calculate_repeat_structure:[18,5,1,""],column_pdf:[18,5,1,""],d_average_multinom:[18,5,1,""],d_average_multiple_max_multinom:[18,5,1,""],d_average_multiple_pars_multinom:[18,5,1,""],empirical_list:[18,5,1,""],gap_penalty:[18,5,1,""],pvalue_from_empirical_list:[18,5,1,""],pvalue_pars:[18,5,1,""],pvalue_psim:[18,5,1,""]},"tral.repeat.repeat_score":{K80:[18,5,1,""],LG:[18,5,1,""],TN93:[18,5,1,""],calculate_pdf_scores:[18,5,1,""],entropy:[18,5,1,""],load_equilibrium_freq:[18,5,1,""],loglikelihood_gaps_starphylogeny_zipfian:[18,5,1,""],loglikelihood_substitution:[18,5,1,""],mean_similarity:[18,5,1,""],optimisation:[18,5,1,""],pSim:[18,5,1,""],parsimony:[18,5,1,""]},"tral.repeat_list":{repeat_list:[19,0,0,"-"],repeat_list_io:[19,0,0,"-"]},"tral.repeat_list.repeat_list":{RepeatList:[19,1,1,""],attribute:[19,5,1,""],common_ancestry:[19,5,1,""],divergence:[19,5,1,""],none_overlapping:[19,5,1,""],none_overlapping_fixed_repeats:[19,5,1,""],pvalue:[19,5,1,""],shared_char:[19,5,1,""],two_repeats_overlap:[19,5,1,""]},"tral.repeat_list.repeat_list.RepeatList":{"__str__":[19,2,1,""],cluster:[19,2,1,""],create:[19,2,1,""],filter:[19,2,1,""],repeats:[19,3,1,""],write:[19,2,1,""]},"tral.search":{filter_hmm:[20,0,0,"-"],search_hmm:[20,0,0,"-"]},"tral.search.filter_hmm":{count_repeats:[20,5,1,""],filter_fasta:[20,5,1,""],filter_search_results:[20,5,1,""],main:[20,5,1,""],match_seqs:[20,5,1,""],parse_hits:[20,5,1,""],write_hits:[20,5,1,""],write_treks:[20,5,1,""]},"tral.search.search_hmm":{TralHit:[20,1,1,""],main:[20,5,1,""],opengzip:[20,5,1,""],shuffle_seq:[20,5,1,""]},"tral.search.search_hmm.TralHit":{parse_line:[20,7,1,""],to_line:[20,2,1,""],to_treks:[20,2,1,""]},"tral.sequence":{repeat_detection_io:[21,0,0,"-"],repeat_detection_run:[21,0,0,"-"],sequence:[21,0,0,"-"],sequence_io:[21,0,0,"-"]},"tral.sequence.repeat_detection_io":{getMSA:[21,5,1,""],hhpredid_get_repeats:[21,5,1,""],phobos_get_repeats:[21,5,1,""],tred_get_repeats:[21,5,1,""],tred_msa_from_pairwise:[21,5,1,""],treks_get_repeats:[21,5,1,""],trf_get_repeats:[21,5,1,""],trust_fill_repeats:[21,5,1,""],trust_get_repeats:[21,5,1,""],xstream_get_repeats:[21,5,1,""]},"tral.sequence.repeat_detection_run":{BinaryExecutable:[21,1,1,""],Detectors:[21,5,1,""],check_java_errors:[21,5,1,""],run_detector:[21,5,1,""],split_sequence:[21,5,1,""]},"tral.sequence.repeat_detection_run.BinaryExecutable":{get_execute_line:[21,2,1,""],get_execute_tokens:[21,2,1,""]},"tral.sequence.sequence":{Sequence:[21,1,1,""]},"tral.sequence.sequence.Sequence":{create:[21,2,1,""],detect:[21,2,1,""],get_repeatlist:[21,2,1,""],repeat_in_sequence:[21,2,1,""],seq:[21,3,1,""],seq_standard_aa:[21,3,1,""],set_repeatlist:[21,2,1,""],write:[21,2,1,""]},"tral.sequence.sequence_io":{read_fasta:[21,5,1,""],write:[21,5,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","staticmethod","Python static method"],"5":["py","function","Python function"],"6":["py","data","Python data"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:staticmethod","5":"py:function","6":"py:data","7":"py:classmethod"},terms:{"0b2":17,"10h":22,"1_388796":[6,12,15],"6gb":13,"__class__":0,"__delattr__":0,"__dict__":0,"__dir__":0,"__doc__":0,"__eq__":0,"__format__":0,"__ge__":0,"__getattribute__":0,"__gt__":0,"__hash__":0,"__init__":0,"__le__":0,"__lt__":0,"__module__":0,"__ne__":0,"__new__":0,"__reduce__":0,"__reduce_ex__":0,"__repr__":0,"__setattr__":0,"__sizeof__":0,"__str__":[0,17,18,19],"__subclasshook__":0,"__version__":10,"__weakref__":0,"_important_":11,"_static":16,"boolean":[18,21],"byte":20,"case":[7,9,12,17,18,21],"char":[12,18,19],"class":[0,8,16,17,18,19,20,21],"export":[14,22],"final":[8,17],"float":[14,17,18,19,20,21],"function":[0,4,17,18,21],"import":[2,5,6,10,12,15,18,22],"int":[17,18,21],"long":14,"null":[11,17,18,21],"return":[17,18,19,20,21],"static":17,"true":[2,6,17,18,20,21],"try":[3,9],about:[8,20],abov:[0,18,19],absolut:[2,6,11,17],academ:10,acalkg:17,acc:17,accdef:18,access:[0,17,21,22],accord:[12,17,18,19,20],accordingli:[12,17],account:[3,9],accur:20,acdef:18,acg:[3,7],acid:[2,8,11,14,17,18,19,21],acquir:22,acquisit:22,act:[19,21],activ:7,adapt:[7,8,9,17,22],add:[3,16,18,21,22],addit:[0,18,19],addition:2,adjust:7,after:[2,7,9,14,15,17,20],again:[5,6],against:[14,17,20],agre:17,ahead:[17,22],albeit:17,alexand:4,alf:[7,11,18],alfsim:[2,11],algorithm:[2,5,6],algortithm:6,align:[0,2,5,6],alignment_ind:21,all:[0,2,6,7,8,10,12,13,14,17,18,19,20,21,22],allow:[14,17,22],allow_overflow:17,along:17,alph:17,alpha:[17,18],alpha_1:[2,18],alpha_2:[2,18],alphabet:[17,18],alreadi:[17,22],also:[6,11,12,14,15,17,21,22],altern:[5,8],ambigu:17,ambiguous_char:17,amend:11,amino:[2,8,11,14,17,18,19,21],among:15,analysi:8,analyt:[17,18],analyz:4,ancestr:17,ancestri:[12,19],ani:[2,6,7,12,17,18],anisimova:[4,8,17,18],annot:[2,4],antonio:4,anywher:18,api:1,appli:19,applic:17,approach:[4,12,17],appropri:14,approxim:17,araghcavaintrlyi:5,arg:[17,18,19,20,21],argument:[7,14,18,19,21],arrai:14,arssagvvvldgkiyviggrdgdgnalnsverydpvtntweklpsmp:5,ask:7,assert:18,assigend:17,assign:17,assum:[10,12,15,17,18,19,20],assumpt:18,atailc:17,attribut:[0,2,12,17,18,19,21],autom:22,automat:[7,8,9,14,21],automis:22,avail:[0,2,11],averag:[0,17],awar:[2,5,6],back:19,bad:18,base:[0,3,7,8,11,14,15,17,18,20],bash:[7,14,22],basic:[2,5,17,18],basic_filt:2,becaus:0,been:[0,8,12,17,18],befor:[7,11,15,17,18],beforehand:[5,6],begin1:18,begin2:18,begin:[0,2,5,6,15,17,18,20,21],behind:22,belong:19,below:[],benson:21,besid:15,best:19,beta:[2,18],better:18,between:17,beyond:18,bin:[7,11,14],binari:[2,11,18,21],binaryexecut:21,binomi:17,bio:[18,20],bioengin:4,bioinformat:[4,8,11,13,17],biol:17,biolog:17,biologi:[11,17,18],biopython:[18,21],biotechnolog:4,birthdeath:18,bliven:4,blosum50:[2,11],bmc:11,bool:[17,18,19,21],both:[8,14,18],bottom:7,boundari:18,box:10,branch:0,briefli:15,bsub:14,btv306:[4,8],bug:17,cal:21,calc:17,calc_calc_n_effect:0,calc_index_msa:[0,18],calc_n_effect:[0,18],calc_pvalu:[2,18],calc_scor:[2,18,21],calcul:0,calculate_log10_indel_prob:17,calculate_log10_probability_indel_length:17,calculate_map_indel_length_exponential_factor:17,calculate_map_indel_length_zipfian_factor:17,calculate_map_indel_r:17,calculate_pdf_scor:18,calculate_position_in_align:18,calculate_pvalu:[0,15,18],calculate_repeat_structur:18,calculate_scor:[0,18],calibr:14,call:[7,18,21],can:[0,2,5,6,7,9,10,11,12,14,15,17,18,22],candid:15,castor:[2,5,6,7,11],castor_paramet:[2,18],cat:[5,6],certain:[17,18,19],cfg:7,chanc:0,changed_fil:3,channel:21,charact:[0,15,17,18,20,21],chart:21,check:[0,3,9,10,17,18,19,20,21],check_java_error:21,checkout:3,choic:[11,17],choos:[5,6,12,14,22],chosen:18,chown:9,chr:18,circl:17,circular_profile_hmm_kelch_1:5,circularli:14,classes_tr:16,classes_tral_notugli:16,classmethod:20,click:3,closest:18,cluster:[7,12,14,17,19],code:[0,1,10,14],codebas:16,coherent_delet:15,collect:[20,22],colum:18,column:[12,17,18,20],column_pdf:18,com:[3,7,16],combin:[17,21],comma:22,command:[0,3,7,9,14,21,22],commandlin:7,commata:0,comment:7,commerci:11,commit:3,common:[12,19],common_ancestri:[12,19],compar:[2,15,17,18],compat:14,compil:[7,9],complet:[17,21],complex:10,complic:7,compo:17,composit:14,comprehens:9,compress:[14,20],comput:[11,14,17,22],concaten:18,concur:18,conf:[3,22],configtr:7,configtral_path:7,confirm:7,connect:0,consecut:18,consensu:[0,21],consensusmsa:21,conserv:[0,4,12,17],consid:[8,15,18,20],consist:[8,14,17],constant:[2,6,17,18,21],construct:21,consumpt:11,contact:0,container:8,content:[11,14],control:22,convers:17,convert:[17,20,21],convolut:18,copi:[7,17,18,21,22],correct:21,correctli:[17,18,21],correl:18,correspond:[14,15,17,18],could:[17,18],count:[14,17,18,20],count_repeat:20,coupl:6,cours:0,cover:0,cphmm:[5,14],creat:[0,2],create_from_repeat:17,criteria:[14,19],criterion:19,crucial:18,csh:22,cumul:18,current:[2,3],cut:[2,17],cyclic:17,cystein:17,d_average_multinom:18,d_average_multiple_max_multinom:18,d_average_multiple_pars_multinom:18,d_cluster:12,d_repeatlist:21,dai:14,dalquen:18,dat:18,databas:[8,14,17,20],databasefil:20,dataset:[],date:17,dbsize:14,dcriterion:19,ddiverg:0,debug:2,decai:17,decid:[7,17,18,21],deep:[4,7,17],definit:18,del:17,delet:[0,17,18,21],delete_insertion_column:18,deleteinsertioncolumn:0,deletetr:7,deletion_length:18,delimit:20,delucchi:4,denot:17,denovo:[0,2,6,12,15,21],denovo_filt:15,denovo_non_overlap:12,densiti:18,depend:[7,10,14,18],dependend:11,deriv:[17,18,21],derivative_log_posterior:17,desc:17,describ:[5,7,9,15,17,18,21],descript:[3,14,18,20],desir:14,dessimoz:18,detail:[2,7,15,17,18],detector:2,determin:[14,17],dev:[7,21],develop:3,diagram:16,dict:[2,17,18,19],dictionari:[17,18,21],did:[6,11,17],differ:[6,7,9,11,12,17,18,19],digit:17,dimension:18,dir:[0,9],direct:17,directli:[5,7,12,14,15],directori:[2,3,7,9,10,17,21,22],discoveri:14,displai:[0,18],distanc:17,distance_index:17,distant:21,distinguish:[15,18],distribut:[5,6,12],diverg:[0,2,5,6,12,15,17,18,19],divergence_from_fp_simul:17,divers:18,divid:[14,18],dkwtvqpiqlp:6,dlyelqasrwewkr:5,dna:[2,11,17,18,21],do_round:17,doc:[3,18],docstr:[17,21],document:[0,1,3,14],doe:[11,17,20,21],doi:[4,8],don:22,done:[17,22],download:[7,8,9,10,11,12,13,15,22],dpvalu:0,draw:12,drepeat_list:0,dscore:0,due:17,dummi:11,dummyhmm:[2,11],dump:6,duplic:0,dure:9,each:[2,7,8,11,14,17,18,19,21],earlier:18,easi:[8,10,11],easiest:8,easili:[5,6,7,11],ecosystem:10,eddi:17,edg:14,effect:18,efmnrghikl:18,egivd:5,either:[2,7,9,11,14,17,18,19,21],ekgglegliyskkrq:15,element:[17,18,19],elh:5,elhvyntatnqwfi:5,elivvf:5,elk:4,els:[18,19,21],emiss:17,emission_fil:17,emit:[14,17],empir:18,empirical_list:18,empti:21,encapsul:20,encod:17,end:[17,18,20,21],endlin:20,enlist:2,ensp00012:18,ensp00013:18,ensur:2,entri:[21,22],entropi:[15,18],enumer:17,env_tral:7,environ:[7,10],eof:21,eq_freq:18,eqfreq:17,equal:[17,18],equilibrium:18,equilibrium_frequ:18,equival:17,errfil:21,error:21,esl:6,estim:[0,14,17,18],eukaryot:[4,17],even:[0,17,21],event:17,everi:[0,14,17],everyth:22,evol:17,evolutionary_model:2,evolv:[0,11,18],evolved_tandem_repeat:18,exact:18,exampl:[0,2,5,6,7,8,12,14,15,17,18,19,20,21,22],except:[17,18,21],exclud:18,execut:[2,7,11,21],exist:[17,21],exit:14,exon:18,exon_structur:18,expect:14,explain:[0,11,18,22],explan:0,exponenti:[15,17],extract:[14,17],eyg:5,faa:[6,14,21],fact:17,factor:17,fake:17,fals:[2,14,17,18,20,21],far:17,fast:22,fasta:[5,6,14,17,18,20,21,22],fastafil:[20,21],fastasplitn:22,favourit:[5,6,11],fbioe:4,feature_nam:3,fed:21,fgglandsedpknniprylndli:5,fibronectin:17,file:[2,5,6,10,11,12],file_format:[18,21],file_nam:18,file_prepar:22,fileconfig:2,filenam:[5,6,14,17,20],filesystem:7,filter_fasta:20,filter_hmm:1,filter_search_result:20,filtered_fasta:14,filtered_trek:14,filtered_tsv:14,final_st:17,find:[0,7,8,11],fine:22,finger:22,first:[6,12,14,15,17,18,19,20,21],fix:17,fixed_valu:17,flag:[17,21],flake8:9,flank:17,fletcher:17,flexibl:17,flg:[0,6],flow:3,fn3:17,folder:[7,18],follow:[0,3,6,7,8,9,11,12,15,16,17,20,21,22],forget:22,form:[17,19],format:[2,5,6,14,17,18,19,20,21,22],formerli:18,forward:19,found:[7,11,15,17],fourth:17,fraction:14,framework:18,frepeat_pickl:[12,15],frequenc:[17,18],frequent:18,from:[0,2],frontier:4,ftp:[13,17,18],full:[],func_nam:[2,15,19],further:15,gamma:[2,5,6,18],gap:[0,2,15,17,18,21],gap_penalti:18,gap_structur:18,gap_structure_hmm:[0,18],gappy_data:18,gapstructur:0,gascuel:[4,17],gaussian:17,gc3pie:[],gc3util:22,gcaaygfvcdgtrllvfggmv:5,gcc:7,gdii:[0,6],gdir:[0,6],gene:22,generalis:18,genom:[4,11,17,18],get:0,get_direct_transition_probabilities_for_delet:17,get_execute_lin:21,get_execute_token:21,get_exon_measur:18,get_exon_structur:18,get_repeatlist:[6,12,15,21],getmsa:21,ghikl:18,ghki:18,ginsi:[2,5,11],git:[3,7],give:19,given:[17,18,20],gklnwasq:6,gks726:4,global:[2,21],gmsgcrlg:5,gonnet:18,good:[0,17,18],got:18,grade:17,graph:16,graphviz:16,gresub:22,gselect:22,gstat:22,guess:20,gzip:[14,20],had:0,handel:18,handl:[15,20,21],happen:18,hard:18,hardcod:18,hauser:[4,18],have:[0,2,3,5,6,7,8,10,12,17,20],haven:7,header:[14,20],heinz:4,help:[7,14],helper:[17,18,19],here:[0,2,5,6,11,12,14,15,17,18,21,22],heurist:18,hghra:5,hhm:21,hhpredid_get_repeat:21,hhrepid64:11,hhrepid:[2,6],hhrepid_32:21,hhrepid_64:[2,11],hhrepid_dummyhmm:[2,11],hidden:[17,21],higher:18,highest:19,hit:[14,20],hiv:[6,12,15],hmm:[1,2],hmm_annot:22,hmm_annotation_raw:22,hmm_copy_id:17,hmm_copy_path:17,hmm_exampl:17,hmm_file:17,hmm_filenam:17,hmm_from_fil:17,hmm_from_tr:17,hmm_from_tr_one_step:17,hmm_io:1,hmm_length:20,hmm_own_model:1,hmm_path_to_aligned_tandem_repeat_unit:17,hmm_path_to_maximal_complete_tandem_repeat_unit:17,hmm_path_to_non_aligned_tandem_repeat_unit:17,hmm_raw:22,hmm_viterbi:1,hmmbuild:[2,11,14,17],hmmer3:[17,18],hmmer3_emission_prob:17,hmmer_prob:17,hmmr:14,hoc:15,hokstad:16,home:[2,7,9,11],homolog:17,host:[10,22],hour:14,hous:17,how:2,howev:[8,11,12,17,21],html:[18,21],http:[3,7,16,18],human:[4,17,18,22],human_hcfc1_fasta:5,human_hcfc1_sequ:5,i_form:17,icolumn:18,identifi:[14,17,18,19,21],idtltwnkp:5,ignor:[2,17,18],ignore_coherent_delet:18,ignore_gap:[2,18],ignore_trailing_gap:[15,18],ignore_trailing_gaps_and_coherent_delet:18,iii:17,ildlwvi:15,ilelrpgsgvvawdipitygvlpppr:5,implement:[12,17],improv:6,inaccur:20,incl:2,includ:[0,5,8,14,17,18,20,22],incomplet:4,indel:[2,5,6],indel_length:17,indel_length_max:17,indel_r:17,indel_rate_per_sit:18,indel_zipf:[17,18],indelratepersit:2,indent:16,independ:[10,18],index:[0,8,14,17,18,21,22],indic:0,inf:17,infil:21,infin:17,info:2,inform:[0,17,18,20,22],inherit:16,initi:[17,19],initialis:17,initialise_hmm_structur:17,input:[14,17,18,19,20,21],input_format:[5,6,17,18,19,21],insert:[0,14,15,17,18],insertion_emiss:17,insertion_length:18,insertion_st:17,insignific:14,instal:[2,3,5,6],install_ext_softwar:7,installation_path:7,instanti:21,instead:[6,13,17,18],instruct:[11,22],integ:21,interim:17,intermediate_output:21,interpret:[5,6,15],introduc:17,invers:20,invok:21,ioanni:4,ipav:5,isequ:[6,12,15],issu:[11,21],itandem_repeat:6,itandemrepeat:15,item:18,iter:[7,18,20,21],itself:8,janelia:[17,18],jar:11,java:[11,21],job:[14,22],job_id:18,join:[5,6,12,15],julia:4,june:17,just:[7,9,14,17,18],k80:[2,18],kajava:[4,18],kappa:[2,18],kdswtvndiq:6,kei:[17,20],kelch_1:5,kept:18,kewk:5,kind:14,kkkk:18,klm:18,klmklmklklm:18,kngpppcpr:5,korsunski:[4,8],krlka:5,kvathekewkctn:5,kwarg:[17,18,19,21],kysn:5,l_criterion:19,l_effect:[0,2,5,6,15,17,18],l_effective_max:[2,17],l_emission_prob:17,l_match:17,l_max:18,l_msa:18,l_repeat_structur:18,l_transition_prob:17,label:17,larg:[11,17],larger:17,last:[15,17,18,22],layout:21,ldetector:21,learn:[5,6,12,15],least:[12,17,19,21],len:[6,12,15,17],leng:17,length:[0,2,5,14,15,17,18,21],less:[14,22],let:22,letter:[17,18],level:2,lghsf:5,lhiv_sequ:[0,12,15],lhmm:[5,21],librari:4,licenc:7,licens:[10,11],like:[0,5,7,16,17,22],likelihood:[0,14,17,18],line:[3,14,20,21],linux64:21,linux:[7,8],list:0,littl:[7,18],lkak:5,llll:18,lmatch:17,lnldtmawetil:5,load:[12,15,17,18,20],load_equilibrium_freq:18,local:[7,9,17,18,19,22],local_working_dir:21,locat:[2,11,22],log10:17,log10arithm:17,log_odd:[14,20],logarithm:17,logger:[18,21],loglikelihood:18,loglikelihood_gaps_starphylogeny_zipfian:18,loglikelihood_substitut:[17,18],logodd:[17,20],logprob:17,longer:[18,21],look:[0,5,6,17],loop:21,lot:0,low:14,lower:15,lowest:12,lsb_jobindex:14,lvgklnwasqii:6,lysin:17,mafft:[2,5,6,7,11,18,21],magic:20,magnitud:2,mai:[0,6,7,14,17,20,22],main:20,make:[7,8,16,17],mani:[8,17,18],manual:[7,11],map:17,maria:4,markdown:3,markov:[17,21],mast:18,match:[14,17,20],match_seq:20,match_stat:17,mathemat:0,matric:[2,11],matrix:[11,15,17,18],matteo:4,matter:12,max:[17,18,19],max_width:17,maxim:18,maximal_gap_length:21,maximum:[0,2,14,17,18],mbe:[4,5,12],mdtl:5,mean:[0,3,14,17,18],mean_similar:18,measur:[0,18],measure_of_similar:18,meet:17,memori:[11,14,20],mention:21,mer:11,merg:17,messag:[2,14,21],messina:[4,8],method:[17,18,19,20,21],might:[0,9,18],min:[2,14,19],min_repeat:14,minimum:[14,17,18,20],minor:18,minu:17,minut:22,miss:[17,18],mkdir:[7,22],mnpqt:18,mnpqtvwy:18,mod:17,mode:18,model:0,modifi:[5,6,11],mol:17,molbev:4,molecular:[11,17,18],moment:[17,21],moreov:7,most:[5,14,17,18],most_likely_path:17,motif:5,mount:10,move:22,msa1:18,msa2:18,msa:[0,5,6,17,18,21],msa_origin:[0,2,5,6,18],msa_standard_aa:0,msad:[0,18],msat:[0,18],msatd:[0,18],msatd_standard_aa:0,msatdn:0,msu062:4,much:17,multipl:[0,6,9,12,14,17,18,21],murri:[4,8],musl:7,must:[17,18],mutableseq:20,mutat:[0,15,18],mutation_r:18,my_msa:18,my_repeat:21,my_tr:18,mydna:21,mytral:22,n_effect:[0,2,5,17,18],n_gap:18,n_iter:18,n_max:18,n_repeat_structur:18,n_sampl:18,name:[11,17,18,19,20,21],nar:[4,15],natur:17,necessari:[3,21],necessarili:17,need:[2,5,6,7,8,11,12,13,15,17,18,21,22],neg:[14,17],next:[3,5],ngap:0,nice:17,nindel:17,nine:15,niter:2,node:22,non:[11,15,17,18],none:[0,5,6,12,15,17,18,19,20,21],none_overlap:[12,19],none_overlapping_fixed_repeat:19,normal:17,normalis:17,notat:17,note:[10,18],notugli:16,now:[12,15,22],nph:4,nucleic:[2,8,11,18],nucleotid:[17,19],num_thread:21,number:[0,3,6,11,14,17,18,20],numer:17,numpi:18,näf:4,object:[0,17,18,20,21,22],observ:[17,20],obsolet:18,occur:[0,17],occurr:17,odd:[14,17,20],off:2,offici:22,onc:[3,11,15,17],onli:[7,11,12,13,15,17,18,19,20,21],onlin:3,open:[6,12,15,20],opengzip:20,oper:7,oppos:18,optimis:[2,18],order:[13,17,18,19],org:[3,11,17,18,22],origin:[3,15,17,18],other:[0,2,6,11,14,17,18,20],otherwis:[3,7,14,22],our:15,out:[0,3,7,10,14,19],outfil:[20,21],output1:21,output2:21,output_characterist:2,output_format:[5,6,17,19],outputfil:[5,6],over:17,overflowerror:17,overlap:[],overlap_typ:[12,19],overlap_type1:19,overlap_type2:19,own:[6,7],p51610:5,p_0:17,p_e:17,p_hmm:17,p_local:17,p_t:17,packag:2,package_directori:[5,6,12,15,22],packages_tr:16,packages_tral_notugli:16,pad:17,page:3,pair:[19,20],pairwis:[19,21],paml:2,paper:13,parallel:[14,21,22],paramet:[14,15,17,18,19,20,21],parse_hit:20,parse_lin:20,parser:[11,21],parsimoni:[15,18],part:[7,8,16,17,21],partial:[14,20],particular:13,pass:20,path_to_output_pickle_fil:[5,6],path_to_output_tsv_fil:[5,6],paulina:4,pavrgdip:5,pdf:[17,18],pecerska:[4,8],penalis:[2,15],penalti:18,per:[2,7,17,18,21],perfect:17,perform:2,perhap:18,permit:14,permut:14,pf00041:17,pf00069:17,pf00560:17,pf01344:5,pf08261:17,pfam:[17,22],pfam_profile_hmm:5,pfamid:17,pgc:5,phobo:2,phobos_get_repeat:21,phylo:[15,18],phylo_gap001:[12,15],phylo_gap001_ignore_coherent_delet:15,phylo_gap001_ignore_trailing_gap:15,phylo_gap001_ignore_trailing_gaps_and_coherent_delet:15,phylo_gap01:[0,2,15,18],phylo_gap01_ignore_coherent_delet:15,phylo_gap01_ignore_trailing_gap:15,phylo_gap01_ignore_trailing_gaps_and_coherent_delet:15,phylo_gap:18,phylogeni:0,phyml:7,phytologist:[4,12],pickl:[5,6,12,15,17,18,19,21,22],pip3:[7,9],pip:[3,7,9,22],pipelin:8,place:[11,13],placement:6,plant:4,platform:8,pleas:[7,11,17],plo:11,plvmddv:5,point:[18,21],poisson:18,posit:[14,15,17,18,21],possibl:[0,13,17,18,19,21],postcondit:21,posterior:17,potenti:18,power:17,prdm:22,prdm_pfam_model:22,precis:[2,18],predict:[4,8,18,21],prefer:17,preserv:14,press:7,pretti:16,prettifi:16,previou:[6,17],previous:0,prhghravaikelivvfgggn:5,print:[0,5,6,10,12,15,22],print_exon_structur:18,prior:17,prior_diverg:17,prior_indel_insert:17,prob:20,probabilit:17,probability_of_the_former_st:17,probabilti:17,probabl:[0,14,17,18],problem:21,problemat:14,procedur:[7,19],process:14,procnam:21,produc:[14,16,18,21],product:17,profil:2,program:[14,21],project:8,proper:18,propip:2,prot:22,protein:[4,15,17,21],proteom:[6,15],proteome_hiv:6,provid:[0,7,10,11,14,15,17,20,21,22],prslhsattignkmyvfggwv:5,pseudo:17,psim:[15,18,21],pslsgvapl:5,pub:[17,18],publish:11,put:[6,8,15],pvalu:[0,2,5,6,12,13,15,18,19],pvalue_from_empirical_list:18,pvalue_par:18,pvalue_psim:18,pylint:16,pypirc:3,pypirc_testpypi:3,pyrevers:16,pyrrolysin:17,pytest:9,python3:[7,8,9,10,22],python:[1,3],queri:14,rais:[17,21],random:[0,18],random_sequ:18,randomli:20,rang:[17,18],rare:18,rate:[2,5,6,14,15,17,18],rate_distribut:[2,5,6,18,21],ratio:14,read_fasta:[18,21],read_hmmer_acc_length:17,readm:3,realign_repeat:18,realign_tr:[6,18],realis:18,reason:17,recalcul:18,recent:5,recommend:[2,7,10],record:21,recreat:20,redirect:21,redund:[],ref:11,refactor:[17,18],reflect:18,reformat:17,region:[0,18,21],region_bound:18,rek:[2,6],rel:14,relat:[9,11,17],releas:3,reli:17,remain:[17,19],remainin:19,remov:18,remove_char:18,remove_gap:18,repat:19,repeat1:19,repeat2:19,repeat_align:1,repeat_config:18,repeat_detect:2,repeat_detection_io:[1,11,20],repeat_detection_run:1,repeat_detector_path:[2,11],repeat_exon:1,repeat_head:21,repeat_in_sequ:21,repeat_info:21,repeat_io:1,repeat_length:21,repeat_list:[1,2,5,6,15,16],repeat_list_filt:[12,15],repeat_list_io:1,repeat_pvalu:1,repeat_region_length:[0,2,5,18],repeat_scor:[1,2],repeat_typ:21,repeat_unit:21,repeatlist:[5,6,19,21],repeatunit:21,replac:[17,18],repo:3,repres:[14,17,20],represent:[6,17],reproduc:10,requir:0,requirements_dev:9,research:[11,18],residu:[17,18,21],respect:[7,17],result:[0,5,6,12,14,15,17,18,20,21,22],result_file_path:18,result_list:[12,15],resultdir:17,retain:12,retriev:[17,18,21],return_str:19,return_typ:18,review:17,riccardo:4,rl_fix:19,role:20,root:[7,9,10,11],round:17,row:17,row_wis:[2,18],rpeptapp:6,rpeptappp:6,rqi:[0,15],rrn:[0,15],rrnrrrrwrarqrqi:0,rrw:[0,15],rst:[3,16],run:2,run_detector:21,runtim:22,same:[12,15,17,18,19],sampl:[17,18],saniti:21,save:[6,17,18,19,21],save_calibr:2,save_original_msa:[0,18,21],save_repeat_fasta:18,save_repeat_stockholm:18,save_repeat_trek:18,saven:17,schaper:[4,8,13,17,18],scipi:18,score:[0,2,12,13,14,15,17,18,19,20],score_calibr:2,score_typ:18,score_valu:18,scoreslist:[2,15,18],scoretyp:18,script:[2,7,10,11,14],sdist:3,search:[1,5,11],search_hmm:1,second:[6,12,17,19],section:[5,6,17],see:[0,2,5,6,14,15,17,18,20,22],seem:17,selab:[17,18],seldom:17,select:14,selenocystein:17,self:[11,17,18,19,21],selfsimilar:11,separ:[0,14,20],seq1:18,seq2:18,seq3:18,seq:[18,20,21],seq_filenam:18,seq_record:21,seq_standard_aa:21,seqio:[18,21],seqrecord:20,sequenc:[0,1,2,4],sequence_fil:21,sequence_id:21,sequence_id_not_defin:21,sequence_io:1,sequence_length:[0,6,18],sequence_record:21,sequence_typ:[0,17,18,21],sequencemsa:21,sequences_hiv:6,sequenti:[14,20],seri:20,serial:[19,20],serv:17,session_nam:22,set:[2,6,7,11,14,15,17,18,19,20,21,22],set_begin:18,set_circle_transition_probability_hmmer3:17,set_emission_probability_hmmer3:17,set_repeatlist:[6,12,15,21],set_transition_probability_hmmer3:17,setenv:22,setup:[3,7,8,9,10,11],setuptr:7,sever:[8,10,11,14,17,19,21,22],shall:[2,18],share:[12,19],shared_char:[12,19],shell:[11,22],shift:17,ship:[2,5,6,11,12,15],shorter:15,should:[7,8,9,10,14,17,22],show:[0,14,21],shown:0,shtavvytekdnkksklviyg:5,shuffl:[14,20],shuffle_seq:20,side:17,sidenot:22,sigma_squar:17,signifi:15,signific:0,similar:[0,18,20],simpl:[8,10,17,18],simpli:[3,7],simplifi:14,sing:[5,6],singl:[3,6,7,14,17,21],site:[0,7,17,18],skip:17,slow:14,slsgvapl:5,slvgnkcyl:5,small:22,smaller:17,solut:17,solv:17,some:[7,17,18,20],sometim:7,sourc:[7,10,12,17,18,19,20,21,22],special:17,specif:17,specifi:[17,18,19,20,21],spencer:4,split:[17,21,22],split_hmmer3_fil:17,split_sequ:21,split_sequence_data:22,sqlite:22,ssh:10,stand:18,standard:[17,18,21],star:[17,18],start:[0,3],start_max:[2,18],start_min:[2,18],state0:17,state1:17,state:[14,17,19,20],state_index:17,statement:18,stderr:21,stdout:21,stefan:4,step:3,stepsiz:18,still:[7,12],stockholm:[17,18],stocking:[4,8],store:[14,17,18,21,22],str:[17,18,19,20,21],strang:21,stream:21,string:[17,18,19,21],structur:[17,18],style:9,submiss:14,submodul:[17,18,19,20,21],subset:[14,22],substitut:[2,11,15,17,18],success:21,sudo:[],suffl:20,suit:[9,17],sum:17,summar:[3,17],support:[8,11,18,19,20],sure:[7,17],svg:16,swap:3,swiss:22,symlink:7,synopsi:[17,18,19,21],syntax:21,system:[2,7,8,11,22],tab:20,tag:[2,6,18,21],taken:17,tandem_repeat:[5,6,17,18],tandem_repeat_annotation_script:22,tandem_repeat_annotation_workflow:22,tandemrepeat:[2,18],tandemrepeatannotationworkflow:22,tar:13,tcsh:22,tdr:14,team:[3,7],temporari:21,term:18,test:0,test_sequ:6,testpypi:3,text:[0,11,18],textd:0,textd_standard_aa:0,than:[9,12,14,15,17,18,21],thei:[15,17,18],them:[3,12,17],therefor:[17,18],thi:[0,2,3,5,6,7,8,9,10,11,12,14,15,17,18,19,20,21,22],third:19,though:17,thread:21,three:[12,14,15,17,18],threshold:[2,14],through:[7,14,22],thu:17,time:[0,2,15,17,18],tla:5,tlaclnldtmawetilmdtlednip:5,tn93:[2,18],to_fixed_width:17,to_lin:20,to_trek:20,togeth:[6,17,18,20],toi:[8,19,22],token:21,too:[7,17],tool:[8,10,11,14,20,22],top:18,total:[17,18],total_repeat_length_max:18,totd:0,tox:9,tpkngpppcprlghsfslvgnkcylfgglandsedpknniprylndlyilelrpgsgvvawdipitygvlpppreshtavvytekdnkksklviyggmsgcrlgdlwtldidtltwnk:5,tracker:11,trail:2,tral:0,tral_repositori:7,tral_search:14,tralhit:20,transfer:10,transform:[5,17,22],transit:[12,17,19],translat:17,transpos:18,travers:20,trd:[0,6,21],treat:[15,18],tred1:21,tred2:21,tred_get_repeat:21,tred_msa_from_pairwis:21,tree:[17,18],trek:[14,20],treks_get_repeat:[20,21],trf404:21,trf:[],trf_get_repeat:21,trivial:14,troubl:8,trust:[2,6],trust_fill_repeat:21,trust_get_repeat:21,trust_substitutionmatrix:[2,11],tsv:[5,6,14,19,20,22],tupl:[17,18,19,20,21],tutori:[0,5,6],two:[12,17,18,19,21],two_repeats_overlap:19,txt:21,type:[0,2],typic:14,ubuntu:8,uint32:18,uint64:18,uir:18,uml:16,unchang:17,uncom:7,uncompress:20,unexpect:16,ungreedi:17,uninstall_all_ext_softwar:7,uniprot:[14,22],uniprot_prdm:22,uniprot_prdm_1:22,uniprot_prdm_annot:22,uniprotkb:22,uniqu:18,unit:0,unix:7,unless:17,unlimit:11,unnam:18,unpublish:11,until:[17,18,19],unzip:7,updat:[3,17,18],upload:3,upon:22,usag:12,usedescript:20,user:[7,18],user_path:[18,21],userguid:[17,18],usr:7,usual:6,valid:[4,18],valu:[0,2,12],variabl:[7,17,22],varieti:15,variou:[14,20],verbos:14,veri:[0,22],version:[3,7,9],via:[17,21],viabl:2,viiterbi:14,violat:22,virtenv:7,virtual:[7,10],virtualbox:10,virtualenv:7,visibl:17,vital:13,viterbi:[2,14,17],viterbi_path:17,viterbi_with_prob:17,viterby_with_prob:17,vkva:5,vpl:5,vvvv:22,wai:[8,17],wait:15,want:7,warn:[2,17],well:[2,7,12,17],were:21,wget:13,what:[0,2,18],when:[0,7,14,17,18,21],where:[0,17,18,21],wherea:[15,19],whether:[12,17,18,21],which:[0,2,7,11,17,18,20,22],who:4,whoami:9,whole:18,why:18,width:17,wish:[2,5,6,7,22],within:[0,4,7,10,15,16,17,18,21],without:[7,17,18],word:20,work:[7,8,9,10,22],workflow:22,working_dir:21,worst:18,would:[0,17,20,22],write_hit:20,write_hmm:17,write_trek:20,wtvndiq:6,wtvqpiqlp:6,www:[16,22],xenario:[4,8],xmx30g:11,xsl:16,xsltproc:16,xstream:[2,6],xstream_get_repeat:21,xzf:13,yang:17,yelq:5,ygf:5,yield:21,you:[0,2,3,5,6,7,8,9,10,11,12,15,17,18,22],your:2,your_featur:3,your_git_nam:3,your_user_nam:3,ypg:6,zero:18,zinc:22,zipf:[2,17],zipfian:[15,17,18],zoller:[4,8]},titles:["Background","Modules","Configuration","Technical hints for contributors","Contributors &amp; Background","Annotate tandem repeats from sequence domain models.","Run and parse de novo repeat detection software.","easy_setup for TRAL","Tandem Repeat Annotation Library","Installation","Using TRAL in a container or VM","Installation of external software","Perform overlap filtering of redundant tandem repeat annotations.","p-Value distribution files","Searching for particular repeats","Perform statistical significance test of tandem repeats.","&lt;no title&gt;","HMM code documentation","Repeat code documentation","Repeat_list code documentation","Search code documentation","Sequence code documentation","Use GC3Pie to annotate your large sequence dataset."],titleterms:{"default":2,"new":2,"public":4,acknowledg:4,algorithm:11,align:11,annot:[5,8,12,15,22],api:14,avail:[12,15],awar:11,background:[0,4],behaviour:2,below:15,branch:3,build:2,calcul:2,chang:2,characterist:0,circular:5,cite:8,clone:3,code:[17,18,19,20,21],config:2,configur:[2,22],contain:10,contribut:[3,8],contributor:[3,4],creat:3,creation:2,csv:0,current:11,data:[2,22],dataset:22,defin:2,detect:[2,5,6,12],detector:[6,11],develop:9,distribut:13,document:[17,18,19,20,21],domain:5,easy_setup:7,evolut:[2,11],extern:[2,6,7,11],featur:3,file:[13,22],filter:[2,12,15],filter_hmm:[14,20],fork:3,from:[3,5],full:14,gc3pie:22,gener:11,get:[7,8],github:3,guid:8,hhrepid:11,hint:3,hmm:[5,17],hmm_io:17,hmm_own_model:17,hmm_viterbi:17,hmmer:2,homepag:3,how:[3,8],indel:11,indic:8,ini:2,instal:[7,9,11,22],instanc:2,integr:11,journal:4,larg:22,librari:8,list:2,log:2,map:22,model:[2,5,11,22],modul:1,more:0,next:9,novo:[2,6],option:2,output:[5,6],overlap:12,overview:14,packag:3,pars:6,particular:14,path:2,peopl:4,perform:[12,15,22],phobo:11,prepar:22,preprocess:22,prerequisit:7,profil:[5,11,22],propip:[5,6,11],pull:3,push:3,pyfaidx:22,pypi:3,pypitest:3,python:14,read:[5,6,12,15],realign:[2,5,6,11],redund:12,refer:8,rek:11,repeat:[0,2,5,6,8,11,12,14,15,18],repeat_align:18,repeat_detection_io:21,repeat_detection_run:21,repeat_exon:18,repeat_io:18,repeat_list:19,repeat_list_io:19,repeat_pvalu:18,repeat_scor:18,repositori:3,request:3,requir:2,restrict:2,run:[6,22],search:[14,20],search_hmm:[14,20],sequenc:[5,6,11,21,22],sequence_io:21,signific:[2,15],simul:[2,11],size:2,softwar:[2,6,7,11],start:[7,8],statist:[2,15],step:9,sudo:9,suppli:2,tabl:8,tandem:[0,2,5,6,8,11,12,15],technic:3,test:[3,15,22],threshold:15,todo:[5,6,17,18,19,21],tral:[2,7,10,22],tred:11,trf:11,trust:11,tutori:8,type:12,uninstal:7,unit:[2,11],usag:[14,22],vagrant:10,valu:13,write:0,xstream:11,yet:11,your:[3,5,6,22]}})