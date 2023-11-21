Create database flagdata;
use flagdata;

CREATE TABLE easyModeForFlagsOfBigAndFamousCountries (
    idFlag int unique,
    tenFlag varchar(40),
    imageFlag varchar(100)
);
CREATE TABLE easyModeFlagsOfCountriesNearVietnam (
    idFlag int unique,
    tenFlag varchar(40),
    imageFlag varchar(100)
);



CREATE TABLE mediumModeSmallAsianCountriesInSouthAsiAndCentralAsia (
    idFlag int unique,
    tenFlag varchar(40),
    imageFlag varchar(100)
);
CREATE TABLE mediumModeMediumAndSmallCountriesInEurope (
    idFlag int unique,
    tenFlag varchar(40),
    imageFlag varchar(100)
);
CREATE TABLE mediumModeAverageCountriesInLatinAmerica (
    idFlag int unique,
    tenFlag varchar(40),
    imageFlag varchar(100)
);



CREATE TABLE hardModeCountriesInAfrica (
    idFlag int unique,
    tenFlag varchar(40),
    imageFlag varchar(100)
);
CREATE TABLE hardModeSmallCountriesInAustralia (
    idFlag int unique,
    tenFlag varchar(40),
    imageFlag varchar(100)
);
CREATE TABLE hardModeMicroCountriesInEurope (
    idFlag int unique,
    tenFlag varchar(40),
    imageFlag varchar(100)
);



insert INTO easyModeForFlagsOfBigAndFamousCountries values 
						(1,"Nga", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Russia.png"),
                        (2,"Canada", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Canada.png"),
                        (3,"Hoa Ky", "https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png"),
                        (4,"Trung Quoc", "https://www.countries-ofthe-world.com/flags-normal/flag-of-China.png"),
                        (5,"Brazil", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Brazil.png"),
                        (6,"Nhat Ban", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Japan.png"),
                        (7,"Anh Quoc", "https://cacnuoc.vn/wp-content/uploads/2016/04/UnionFlag.png"),
                        (8,"Phap", "https://www.countries-ofthe-world.com/flags-normal/flag-of-France.png"),
                        (9,"Australia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Australia.png"),
                        (10,"An Do", "https://www.countries-ofthe-world.com/flags-normal/flag-of-India.png"),
                        (11,"Argentina", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Argentina.png"),
                        (12,"Mexico", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Mexico.png"),
                        (13,"Indinosia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Indonesia.png"),
                        (14,"Columbia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Cambodia.png");
insert INTO easyModeFlagsOfCountriesNearVietnam values                       
                        (1,"Thai Lan", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Thailand.png"),
                        (2,"Lao", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Laos.png"),
                        (3,"Myanmar", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Myanmar.png"),
                        (4,"Malaysia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Malaysia.png"),
                        (5,"Philippines", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Philippines.png"),
						(6,"Indinosia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Indonesia.png"),
                        (7,"Singapore", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Singapore.png"),
                        (8,"Dong Timor", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Timor-Leste.png"),
                        (9,"Trieu Tien", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Korea-North.png"),
                        (10,"Han Quoc", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Korea-South.png"),
						(11,"Nhat Ban", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Japan.png"),
                        (12,"Cambodia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Cambodia.png"),
						(13,"An Do", "https://www.countries-ofthe-world.com/flags-normal/flag-of-India.png"),
						(14,"Trung Quoc", "https://www.countries-ofthe-world.com/flags-normal/flag-of-China.png");


          
insert INTO mediumModeSmallAsianCountriesInSouthAsiAndCentralAsia values                       
                        (1,"Singapore", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Singapore.png"),
                        (2,"Brunei", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Brunei.png"),
                        (3,"Đông Timor", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Timor-Leste.png"),
                        (4,"Lào", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Laos.png"),
                        (5,"Cambodia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Cambodia.png"),
						(6,"Myanmar", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Myanmar.png"),
                        (7,"Việt Nam", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Vietnam.png"),
                        (8,"Philippines", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Philippines.png"),
                        (9,"Maldives", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Maldives.png"),
                        (10,"Bhutan", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Bhutan.png"),
						(11,"Nepal", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Nepal.png"),
                        (12,"Malaya", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Malaysia.png"),
						(13,"Sri Lanka", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Sri-Lanka.png"),
						(14,"Trung Quoc", "https://www.countries-ofthe-world.com/flags-normal/flag-of-China.png");
insert INTO mediumModeMediumAndSmallCountriesInEurope values                       
                        (1,"Bỉ", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Belgium.png"),
                        (2,"Hà Lan", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Netherlands.png"),
                        (3,"Thụy Sĩ", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Switzerland.png"),
                        (4,"Áo", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Austria.png"),
                        (5,"Bồ Đào Nha", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Portugal.png"),
						(6,"Na Uy", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Norway.png"),
                        (7,"Đan Mạch", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Denmark.png"),
                        (8,"Cộng hòa Séc", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Czech-Republic.png"),
                        (9,"Hy Lạp", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Greece.png"),
                        (10,"Ba Lan", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Poland.png"),
						(11,"Hungary", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Hungary.png"),
                        (12,"Slovakia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Slovakia.png"),
						(13,"Slovenia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Slovenia.png"),
						(14,"Croatia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Croatia.png"),
                        (15,"Latvia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Latvia.png");						
insert INTO mediumModeAverageCountriesInLatinAmerica values                       
                        (1,"Colombia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Colombia.png"),
                        (2,"Argentina", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Argentina.png"),
                        (3,"Peru", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Peru.png"),
                        (4,"Chile", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Chile.png"),
						(5,"Ecuador", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Ecuador.png"),
                        (6,"Guatemala", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Guatemala.png"),
                        (7,"Costa Rica", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Costa-Rica.png"),
                        (8,"Uruguay", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Uruguay.png"),
                        (9,"Panama", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Panama.png"),
						(0,"Bolivia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Bolivia.png"),
                        (11,"Honduras", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Honduras.png"),
						(12,"El Salvador", "https://www.countries-ofthe-world.com/flags-normal/flag-of-El-Salvador.png"),
						(13,"Nicaraguasan_pham_moi_nhat", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Nicaragua.png"),
                        (14,"Cuba", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Cuba.png");			


insert INTO hardModeCountriesInAfrica values                       
                        (1,"Nigeria", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Nigeria.png"),
                        (2,"Ethiopia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Ethiopia.png"),
                        (3,"Uganda", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Uganda.png"),
                        (4,"Somalia ", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Somalia.png"),
						(5,"Rwanda", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Rwanda.png"),
                        (6,"Kenya", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Kenya.png"),
                        (7,"Ghana", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Ghana.png"),
                        (8,"Tanzania", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Tanzania.png"),
                        (9,"Algeria", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Algeria.png"),
						(10,"Angola", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Angola.png"),
						(11,"Sudan", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Sudan.png"),
						(12,"Cameroon", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Cameroon.png"),
                        (13,"Mozambique", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Mozambique.png"),
                        (14,"Zimbabwe", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Zimbabwe.png");
insert INTO hardModeSmallCountriesInAustralia values                       
                        (1,"Nauru", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Nauru.png"),
                        (2,"Tuvalu", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Tuvalu.png"),
                        (3,"Palau", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Palau.png"),
                        (4,"Tokelau ", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Somalia.png"),
						(5,"Kiribati", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Kiribati.png"),
                        (6,"Vanuatu", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Vanuatu.png"),
                        (7,"New Zeland", "https://www.countries-ofthe-world.com/flags-normal/flag-of-New-Zealand.png"),
                        (8,"Samoa", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Samoa.png"),
                        (9,"Fiji", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Fiji.png"),
						(10,"Australia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Australia.png"),
						(11,"Papua New Guinea", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Papua-New-Guinea.png"),
						(12,"Tonga", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Tonga.png"),
                        (13,"Solomon Islands", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Solomon-Islands.png"),
                        (14,"Marshall Islands", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Marshall-Islands.png");
insert INTO hardModeMicroCountriesInEurope values                       
                        (1,"Vatican", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Vatican-City.png"),
                        (2,"Monaco", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Monaco.png"),
                        (3,"San Marino", "https://www.countries-ofthe-world.com/flags-normal/flag-of-San-Marino.png"),
                        (4,"Liechtenstein ", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Liechtenstein.png"),
						(5,"Andorra", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Andorra.png"),
                        (6,"Malta", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Malta.png"),
                        (7,"Luxembourg", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Luxembourg.png"),
                        (8,"Estonia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Estonia.png"),
                        (9,"Albania", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Albania.png"),
						(10,"Belarus", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Belarus.png"),
						(11,"Moldova", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Moldova.png"),
						(12,"Slovenia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Slovenia.png"),
                        (13,"Lithuania", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Lithuania.png"),
                        (14,"Latvia", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Latvia.png"),
                        (15,"Montenegro", "https://www.countries-ofthe-world.com/flags-normal/flag-of-Montenegro.png");

select  tenFlag, idFlag
from easyModeForFlagsOfBigAndFamousCountries
where idFlag = "1";

select * from  easyModeForFlagsOfBigAndFamousCountries;
select * from  easyModeFlagsOfCountriesNearVietnam; 
select * from  mediumModeSmallAsianCountriesInSouthAsiAndCentralAsia; 
select * from  mediumModeMediumAndSmallCountriesInEurope;  
select * from  mediumModeAverageCountriesInLatinAmerica;  
select * from  hardModeCountriesInAfrica;
select * from  hardModeSmallCountriesInAustralia;
select * from  hardModeMicroCountriesInEurope;  
                       
                        
                        
                        
