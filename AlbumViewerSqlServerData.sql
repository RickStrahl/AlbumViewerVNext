
GO
/****** Object:  Table [dbo].[Albums]    Script Date: 10/5/2016 10:48:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Albums](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ArtistId] [int] NULL,
	[Title] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Year] [int] NOT NULL,
	[ImageUrl] [nvarchar](max) NULL,
	[AmazonUrl] [nvarchar](max) NULL,
	[SpotifyUrl] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.Albums] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Artists]    Script Date: 10/5/2016 10:48:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Artists](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ArtistName] [nvarchar](128) NULL,
	[Description] [nvarchar](max) NULL,
	[ImageUrl] [nvarchar](256) NULL,
	[AmazonUrl] [nvarchar](256) NULL,
 CONSTRAINT [PK_dbo.Artists] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tracks]    Script Date: 10/5/2016 10:48:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tracks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AlbumId] [int] NULL,
	[SongName] [nvarchar](128) NULL,
	[Length] [nvarchar](10) NULL,
	[Bytes] [int] NOT NULL,
	[UnitPrice] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_dbo.Tracks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 10/5/2016 10:48:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Fullname] [nvarchar](128) NULL
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Albums] ON 

GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1, 1, N'For Those About To Rock We Salute You', N'This album stands as full-proof evidence to the absolute dedication that the band has for giving their fans only the best. Features the classics For Those About To Rock (We Salute You); Inject The Venom...', 1981, N'https://images-na.ssl-images-amazon.com/images/I/41LILmwtooL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00008WT5G/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00008WT5G&linkCode=as2&tag=westwindtechn-20&linkId=SWZZPGAYVCI47LYK', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (2, 2, N'Balls to the Wall', N'As cheesey as some of the titles and lyrics on this record are, the music is classic mid eighties metal, with heavy dual guitars and the troll like growling and features of Udo Dirkschneider. If you can look past the metal clichees this is an awesome record.', 1983, N'https://images-na.ssl-images-amazon.com/images/I/519J0xGWgaL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00005NNMJ/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005NNMJ&linkCode=as2&tag=westwindtechn-20&linkId=MQIHT543FNE5PNZU', N'https://play.spotify.com/album/2twCPCDGJjVD90GWUjA8vN')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (3, 2, N'Restless and Wild sss', N'An all time classic. At the time Fast as a Shark was THE heaviest thing made to that date and while the rest of this album can''t really live up to that song, it''s still an excellent specimen of 80''s metal. Clean, fast heavy.', 1982, N'https://images-na.ssl-images-amazon.com/images/I/51aInWlHfgL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00138KM1U/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00138KM1U&linkCode=as2&tag=westwindtechn-20&linkId=AQAYEWNVF5Z36AZB', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (4, 1, N'Let There Be Rock', N'This album came screaming out of Australia in 1977! AC/DC''s first stab at a "real" album - a break from the early "novelty" approach to songwriting and a move to the more focused album-oriented view that the band would perfect.

Let There Be Rock, the fourth AC/DC album -- and first to see simultaneous international release -- is as lean and mean as the original lineup ever got. Shaved down to the bone -- there are only eight tracks, giving this a lethal efficiency even with a couple of meandering jams -- this is a high-voltage, brutal record, filled with "Bad Boy Boogie." It has a bit of a bluesier edge than other AC/DC records, but this is truly the sound of the band reaching its peak. There''s the near majesty of "Let There Be Rock," there''s Bon Scott acknowledging with a wink that "Hell Ain''t a Bad Place to Be," and then there''s the monumental "Whole Lotta Rosie." Which gets down to a key thing about AC/DC. If Led Zeppelin were celebrating a "Whole Lotta Love," AC/DC got down to the grimy details in their leering tribute to the joys of sex with a plus-sized woman. And that''s AC/DC''s allure in a nutshell -- it''s sweaty, dirty, nasty rock, music that is played to the last call and beyond, and they''ve rarely done that kind of rock better than they did here.', 1977, N'https://images-na.ssl-images-amazon.com/images/I/51ndkC4IocL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00008WT5C/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00008WT5C&linkCode=as2&tag=westwindtechn-20&linkId=UUOA6PIXN72MNU6E', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (5, 4, N'Strong Arm of the Law', N'A mere six months after releasing their stunning sophomore album, Wheels of Steel, Saxon almost managed to top themselves with the equally timeless Strong Arm of the Law, forever after dividing their fan base over which of the two delivered the ultimate Saxon long-playing experience. This time, instead of motorcycle engines revving, it''s thunder and lightning launching the album in truly bombastic fashion via the embryonic thrashing of "Heavy Metal Thunder." And then it soon becomes apparent that Saxon had learned a little something from their then-recent tour of England with Motörhead, because break-neck anthems like "To Hell and Back Again," "Taking Your Chances," the very naughty "Sixth Form Girls," and the high-flying "20,000 Ft" just keep on coming at the listener, full speed ahead. A few more deliberate offerings are wisely sprinkled in to allow for some breathing room, and include the album''s ever-popular title track (based on the band''s true-life experience of being pulled over by highway police during their first American tour), the uniquely unimpressive "Hungry Years," and the unusually political "Dallas 1 PM," which details the assassination of President John F. Kennedy. In sum, as had been the case with Wheels of Steel, all the right ingredients pretty much fell into place for Saxon on this amazing record, and though it lacked as many clear-cut hits as its predecessor (namely "Motorcycle Man," "747," and "Wheels of Steel"), Strong Arm of the Law‘s unmatched consistency from start to finish makes it the definitive Saxon album in the eyes of many fans and critics. Suffice to say that you''d be hard pressed to find any New Wave of British Heavy Metal Top Ten list that doesn''t include both of these efforts, and we''ll leave it at that.', 1980, N'https://images-na.ssl-images-amazon.com/images/I/51DZLpe3XbL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0026M1Y3M/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0026M1Y3M&linkCode=as2&tag=westwindtechn-20&linkId=6BNE2OWUOBXBWHJW', N'https://play.spotify.com/album/31rQ8a12b01IJ2tTFcM1bW')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (6, 4, N'Wheels of Steel', N'Saxon''s second album is one of the best examples of the greatness that was the New Wave of British Heavy Metal. While not as technically proficient as Iron Maiden or as heavy as Judas Priest, Saxon were one of the top metal bands of the early `80s with their brand of blue collar metal. This album is all about believing in yourself and band''s love of transportation, especially motorcycles. "Motorcycle Man" starts out with the Harley racing down the highway before launching into a fierce attack led by Biff Byford''s powerful vocals. Their zeal and passion never let up as one great anthem blends into another only slowing down a bit on the excellent mid-tempo "747 (Strangers in the Night)" and the melodic "Suze Hold On" and even those songs rock. Otherwise, "Street Fighting Gang", "Freeway Mad", "Machine Gun", "See the Light Shining", and "Stand Up and Be Counted" are all wicked tracks with awesome riffs from Paul Quinn and Graham Oliver and strong performances from the rhythm section of Steve Dawson and Pete Gill. The title track is their signature song, their "Tom Sawyer" or "Walk This Way" if you will, and is one of the all-time great metal anthems. This is Saxon''s best album (Strong Arm of the Law is close) and if you love heavy metal, this is a must have.', 1980, N'https://images-na.ssl-images-amazon.com/images/I/51fwgJZueVL._SL250_.jpg', N'http://www.amazon.com/gp/product/B002760ABE/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B002760ABE&linkCode=as2&tag=westwindtechn-20&linkId=V265TY3CJOVS5ZV6', N'https://play.spotify.com/album/6EGEGr4oY0PsV6yGBxeQ8J')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (7, 5, N'Facelift', N'A revolutionary style sound and fantastic grunge masterpiece. A classic record that is a must have in any fan of rock and metal. A revolutionary style sound and fantastic grunge masterpiece. Alice in Chains did not put out many albums in their history, but each one was perfect for its time and how it sounded.', 0, N'https://images-na.ssl-images-amazon.com/images/I/51JE69Ud-uL._SL110_.jpg', N'http://www.amazon.com/gp/product/B00000272N/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00000272N&linkCode=as2&tag=westwindtechn-20&linkId=6TJLVJIFW37M4C3R', N'https://play.spotify.com/album/5LbHbwejgZXRZAgzVAjkhj')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (8, 6, N'The Nightcomers', N'Except for Diamond Head, probably no other New Wave of British Heavy Metal band had as much of an impact on the sound made famous by Metallica as Holocaust (see the metal legends'' cover of Holocaust''s "The Small Hours" -- not featured here). In fact, only the aforementioned Diamond Head and the great Iron Maiden could compare to Holocaust in terms of authentic, straightforward heavy metal intensity. Lyrically, the band didn''t waste time with shag anthems à la Def Leppard or delve into grand historical themes like Maiden, they just plain rocked out -- Judas Priest-style. The classic "Heavy Metal Mania" ("I''ve got heavy metal music in my blood") and "Smokin'' Valves" ("I love to rock! I love to get down low") are perfect examples, stating the obvious with endearing cheesiness. But Holocaust were about big, blunt riffs, not small talk. Just witness the Sabbath-inspired power chords which reign supreme on the title track, "Mavrock," and their masterpiece, "Death or Glory." The slightly looser "Cryin'' Shame" is probably the only exception, standing out as the album''s only obvious single thanks to its catchy riff. Out of print for nearly a decade, The Nightcomers was finally re-issued by Edgy Records in 2000. Remastered and packed with three excellent bonus tracks (including outstanding B-sides "Love''s Power" and "Only As Young As You Feel"), it''s a worthwhile treat for any serious N.W.O.B.H.M. fan.', 1981, N'https://images-na.ssl-images-amazon.com/images/I/510rU60O2jL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00FSKI1HQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00FSKI1HQ&linkCode=as2&tag=westwindtechn-20&linkId=4DBOX7JEBWFL2FJP', N'https://play.spotify.com/album/5bcEM2rjdQiOG5J272Ib2w')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (9, 7, N'Kein Schlaf bis Deutschland', N'This compilation album compiles songs from Attitude''s three released previous albums Kein Schlaf bis Deutschland, The Good the bad the Obnoxious and the Drive By Shooting single. Homeless Crew remains one of the metal/punk cross-over classics as one of the hardest hitting songs of the genre. Attitudes energetic live shows and entertaining stage banter were a Bay Area favorite for year. Unfortunately the band didn''t stay together long enough to reach more deserved infamy and remained a relatively unknown underground phonenomenon.', 1987, N'https://images-na.ssl-images-amazon.com/images/I/410ZYYAEVWL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00000ATMY/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00000ATMY&linkCode=as2&tag=westwindtechn-20&linkId=2WMJWSKVQCCJWDIT', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (10, 8, N'Audioslave', N'The debut of thundering supergroup Audioslave--featuring members of Rage Against the Machine post-Zack de la Rocha with ex-Soundgarden singer Chris Cornell--is as much curio as fascinating blend of visions.', 2002, N'https://images-na.ssl-images-amazon.com/images/I/514RWTJvpHL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00006RU5B/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00006RU5B&linkCode=as2&tag=westwindtechn-20&linkId=TNXHFSVZ62ELHI34', N'https://play.spotify.com/album/78guAsers0klWl6RwzgDLd')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (11, 8, N'Out Of Exile', N'In what was widely predicted to be a short-lived supergroup/side-project, Audioslave has instead gratifyingly yielded a bonafide band. "Out of Exile" is essentially a straight-ahead rock album, with a real classic rock feel. ', 2005, N'https://images-na.ssl-images-amazon.com/images/I/517jvAx8HoL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00097DX3U/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00097DX3U&linkCode=as2&tag=westwindtechn-20&linkId=BXY6AP6WL7IXPVUQ', N'https://play.spotify.com/album/0HQhToIjonHnJRRPN4jeJU')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (12, 9, N'Répression', N'The confirmation! TRUST pushes further the limits already established with their first LP, and nobody is laughing anymore...

Now we have to take into account these young people who don''t hesitate to provoke and to give their opinions with noise.
And they will take advantage of this position to cross the borders and to share their music with the world in releasing an English version of this LP.

Radio and TV show more and more interest in them and these ones will make a popular hymn of "Antisocial".
It''s right that the ones who discredited TRUST in 1979 now flatter them. What a great step made in only one year. The sound is more elaborated, the songs are still engaged and the band shoot at all the issues, in particular with "M.Comedy", "Pick Me Up, Put Me Down", "Sects"...

And they also use an extract of Jacques MESRINE''s book, in order to write "Le Mitard" ( Jacques MESRINE was the French public enemy n°1 at this moment ).
They begin to be censorship''s victims because they disturb during President GISCARD''s years.
From this LP, the following tracks will remain in the fans memory : "M.Comedy", "Paris Is Still Burning", "Le Mitard", "Death Instinct" and.......of course "Antisocial".', 1978, N'https://images-na.ssl-images-amazon.com/images/I/51bJLbC8afL._SL250_.jpg', N'http://www.amazon.com/gp/product/B001EWKPNA/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001EWKPNA&linkCode=as2&tag=westwindtechn-20&linkId=2EK2VYMEMARJU4GU', N'https://play.spotify.com/album/1L8Ph3LqqUvn9PgEUJRTtW')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (13, 9, N'Préfabriqués', N'Its release in 1979, acted like a bomb effect. The sound is rough, the recordings were done in 15 days, nearly in live conditions...but the result is there, and the public''s answer is quick. It''s true that the first LP was greatly helped by a tour and some notorious acts, like a gig at the Fleury Merogis prison.
Little regrets however for the fans from the first hours, the LP doesn''t contain some classics as "Prends pas ton flingue", "Paris by Night" ( which ones were already on the first single ), and especially "Seventeen" and "Telex" who will never been released in the future...
Although this first shot gives us some undying tracks : "Prefabricated" and its memorable drum break, "Bosser 8 heures" and its killer lyrics, "Police Milice" ( no comments....)and particularly "L''Elite" and its epic guitar solo which would become a reference in the whole rock scene...
First LP for a band that was already considered as a future major band for some people and straw fire for the others...
Only the future would prove that these musicians who were considered as "pimply young students without brains" acted right by putting their hope in a band that had the courage and the strength to shout loudly its ideas.', 1979, N'https://images-na.ssl-images-amazon.com/images/I/410Ni47gsaL._SL250_.jpg', N'http://www.amazon.com/gp/product/B001EWD1TK/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001EWD1TK&linkCode=as2&tag=westwindtechn-20&linkId=ZAXNJ4AILVEBT46V', N'https://play.spotify.com/album/67N0ijsiAssJ6FgD5QEBEP')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (35, 50, N'Garage Inc.', N'For many years, Metallica''s 1987 EP Garage Days Re-Revisited was the most sought-after item in their catalog; it was constantly bootlegged in the ''90s, and often supplemented by a host of covers Metallica had released on singles and compilations throughout the years. By 1998, the band had understandably grown frustrated with this situation and decided to confront the problem head-on by reissuing all these rarities.', 1998, N'https://images-na.ssl-images-amazon.com/images/I/51kKa-J-p5L._SL250_.jpg', N'http://www.amazon.com/gp/product/B00EBDXSCE/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00EBDXSCE&linkCode=as2&tag=westwindtechn-20&linkId=KKA3VIFUIXD2ZO6B', N'https://play.spotify.com/album/4qDiQwJ7UEuJsGLWL078nQ')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (150, 50, N'Kill ''Em All', N'Metallica''s skull-crushing, bone-breaking, faster-than-the-speed-of-freakin''-light thrash metal debut. This is the one your mother warned you about. This album may cause uncontrollable fits of energy, headbanging, and moshing. Keep out of reach of children. (Give them St. Anguish instead... on second thought, never mind. No one should have to suffer through that.', 1984, N'https://images-na.ssl-images-amazon.com/images/I/5152pcljWEL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00EBDXYVO/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00EBDXYVO&linkCode=as2&tag=westwindtechn-20&linkId=KZBTMSUE6QBMXBBR', N'https://play.spotify.com/album/6FMPDVTm8l5IrEQla46VQl')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (154, 50, N'Ride The Lightning', N'Kill ''Em All may have revitalized heavy metal''s underground, but Ride the Lightning was even more stunning, exhibiting staggering musical growth and boldly charting new directions that would affect heavy metal for years to come. Incredibly ambitious for a one-year-later sophomore effort, Ride the Lightning finds Metallica aggressively expanding their compositional technique and range of expression.', 1986, N'https://images-na.ssl-images-amazon.com/images/I/51aZHqQUdHL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00EBDXSOW/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00EBDXSOW&linkCode=as2&tag=westwindtechn-20&linkId=GR6BCTOMNFJF6JCE', N'https://play.spotify.com/album/7a1dlwArQK6OCHkr2SNlZR')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (271, 8, N'Revelations', N'In light of this record, Out of Exile feels driven by Cornell, which itself was a shift away from the Rage-driven debut. Here, the two are integrated fully into a distinctive sound, one that''s tight and focused, one that''s aggressive but not overly heavy. Also, Audioslave has become increasingly rhythm-driven instead of riff-driven; even on the slower songs and heavy rockers, the pulse and pull of the rhythm defines the song more than the riff. Given this emphasis on rhythm, it''s not a surprise that Audioslave displays an overt funk and soul influence here.', 2006, N'https://images-na.ssl-images-amazon.com/images/I/512Qi7tb1KL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000GW8B08/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000GW8B08&linkCode=as2&tag=westwindtechn-20&linkId=GLCSEGCHUNOKTW22', N'https://play.spotify.com/album/6Ys6uRTMti54CH8VEo2xEt')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (511, 327, N'Condemned 2 Death', N'Rocking out after a hefty hiatus for a release on Nuclear Blast Records, CONDEMNED? is proving that although the years may have passed, they can still thrash with the best of them.

Condemned 2 Death is a collection of songs new and old that cover 25 years of time. The music has much more of a metal feel, while paying plenty of tribute to Condemned''s hardcore punk rock roots. This record has moments of genius with various complex riff arrangements mixed with tap your foot catchy sections. Standouts are Aggressive System with it''s old school Discharge, Anti-social with it''s punky and catchy chorus, Cavern in Time and Emotional Blurr with their intensly heavy riffs. 

Overall this album is a delightful mix of Metal and Punk Rock lore that got not nearly enough attention from fans or press.', 0, N'http://ecx.images-amazon.com/images/I/61CMcYAP%2BQL._SL500_AA280_.jpg', N'http://www.amazon.com/gp/product/B004MC5YEY/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B004MC5YEY&linkCode=as2&tag=westwindtechn-20', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (512, 328, N'Animosity', N'One of the best punk metal cross-over albums ever made and maybe *the* album that defined the genre.

Corrosion of Conformity was one of the first bands to fully embrace both their punk rock roots as well as much heavier tones and rhythms of new school metal bands, combining both the social messaging and furious speed of punk, with the heavy guitars and drums of the metal world. 

Animosity is a testament to the best of those two worlds colliding, which resulted in a masterpiece of energy, angst and furor that has not been matched very often ever since.', 0, N'http://ecx.images-amazon.com/images/I/61ngIfFbnyL._SL500_AA300_.jpg', N'http://www.amazon.com/gp/product/B000001C88/ref=as_li_ss_tl?ie=UTF8&tag=westwindtechn-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B000001C88', N'https://play.spotify.com/album/0rAGxy0IjEIU7bWK9khdLT')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (513, 329, N'Echoes, Silence, Patience & Grace', N'Undeniably, The Foo Fighters'' new album is, to its core, rock music the way it was meant to be.', 0, N'http://ecx.images-amazon.com/images/I/41mtlesQPVL._SL500_AA280_.jpg', N'http://www.amazon.com/gp/product/B000UFAURI/ref=as_li_ss_tl?ie=UTF8&tag=westwindtechn-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B000UFAURI', N'https://play.spotify.com/album/3ilXDEG0xiajK8AbqboeJz')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (514, 330, N'End of the Silence', N'This album is so hard and sooo heavy that it hurts, but that is the idea. Angry, rough and intense are words that spring to mind on this record that has a live vibe to it.', 1989, N'http://ecx.images-amazon.com/images/I/51FO3rb1tuL._SL160_AA160_.jpg', N'http://www.amazon.com/End-Silence-Rollins-Band/dp/B0000040OX/ref=sr_1_5?ie=UTF8&qid=1302232195&sr=8-5', N'https://play.spotify.com/album/3SuoSD9teM0sTO2bB0nJoj')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (515, 330, N'Weight', N'Weight was the Rollins Band''s breakthrough into the mainstream and remains their best album. This albums is more polished than previous efforts, yet retains the raw Rollins energy.', 0, N'http://ecx.images-amazon.com/images/I/41eHEGu8NML._AA115_.jpg', N'http://www.amazon.com/Weight-Rollins-Band/dp/B0000040P3/ref=sr_1_1?ie=UTF8&s=music&qid=1302232341&sr=8-1', N'https://play.spotify.com/album/0ojibvFQvx5EH53qEGnkAw')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (516, 331, N'Ace of Spades (sql) ', N'Motörhead are the founding fathers of speed and thrash metal. Without this band, there would be no Slayer or Sepultura, so you''ve at least got to give Lemmy and Co. props for being so influential. And "Aces of Spades" is an essential, legendary speed metal classic. It''s full of fast, meaty riffs, great solos, toe-tapping drums, and catchy, gruff vocals. Almost every song on here (especially the title track, "Love Me Like a Reptile," and "We Are The Road Crew") is very catchy. And the album opening title track, which has a speedy, groove-y main riff, is world renowned. Other highlights include the wah-wah solo and shout-along refrain on "Fire, Fire," "Jailbait," "Dance" (which has a pair of tasty guitar solos), the X-rated "The Chase Is Better Than The Catch," and the famous, rhythmic, nearly dance-able "Please Don''t Touch." All in all, if you''re looking for great, groove-y, contagious and exciting speed metal, Motorhead "aces" it.', 1978, N'https://images-na.ssl-images-amazon.com/images/I/618Zuqc4J5L._SL250_.jpg', N'http://www.amazon.com/gp/product/B00005NHO2/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005NHO2&linkCode=as2&tag=westwindtechn-20', N'https://play.spotify.com/album/2La9yFPh8VZ1VsaVXtHazI')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (517, 332, N'Enemy of the Sun', N'Enemy of the Sun is a carefully sustained sonic assault of epic proportions. Epic is right - this record is Neurosis best as it mixes the raw power with great production to produce a sonic wall.', 1994, N'https://images-na.ssl-images-amazon.com/images/I/61acQQ4IwZL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00000JQFB/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00000JQFB&linkCode=as2&tag=westwindtechn-20', N'https://play.spotify.com/album/2DkGzzLXTY6lCiD617dJkc')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (518, 333, N'Cleansing', N'Prong are the evolution of Killing Joke into metal. Even though Killing Joke are still around and still great, Prong took the torch they dropped in the late 80''s and created a great mix of Metal and industrial like starkness.', 0, N'https://images-na.ssl-images-amazon.com/images/I/51Jy8EoV8kL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0000028TD/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0000028TD&linkCode=as2&tag=westwindtechn-20', N'https://play.spotify.com/album/1RmsgRJnBFyRMAVl1NW9pO')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (519, 334, N'Superunknown', N'Fell on Black Days indeed. Seattle sludge slingers Soundgarden made a living out of cathartic, woe-is-me wailing, but this wallowing in grim depression ironically proved to be the band''s most uplifting career effort.', 1994, N'https://images-na.ssl-images-amazon.com/images/I/41P1443RDHL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000002G2B/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000002G2B&linkCode=as2&tag=westwindtechn-20', N'https://play.spotify.com/album/4K8bxkPDa5HENw0TK7WxJh')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (520, 335, N'Undertow', N'Undertow is Tool''s most musically adventurous album, lacking the occasionally numbing sameness of Aenima, and with considerably more sophistication than their previous work.', 1993, N'https://images-na.ssl-images-amazon.com/images/I/41mJt4IVkhL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000000993/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000000993&linkCode=as2&tag=westwindtechn-20', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (521, 336, N'Crash Course', N'The Subs are the quintessential UK Punk band of the early days, and this live recording captures the feel intensity of the mid-seventies British Punk movement perfectly.', 0, N'https://images-na.ssl-images-amazon.com/images/I/613jNLYLRcL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0091JCXXS/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0091JCXXS&linkCode=as2&tag=westwindtechn-20', N'https://play.spotify.com/album/3FugAkMJVXT0m4tCS69OpE')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (582, 340, N'Auswärtsspiel', N'It''s very unusual for a punk-rock band to stay true to their music, their ideals and their fans after 20 years. This album shows that Die Toten Hosen is one of those unusual bands. This album will not disappoint you', 2007, N'https://images-na.ssl-images-amazon.com/images/I/51rXT6j%2BwRL._SL250_.jpg', N'http://www.amazon.com/gp/product/B001MFOULW/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001MFOULW&linkCode=as2&tag=westwindtechn-20&linkId=X5KW75PMFHGVYVGA', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (584, 342, N'The Sun and the Moon', N'Uncomplicated but entertaining from start to end. On "The Sun and the Moon" (12 tracks; 40 min.), the Bravery does not falter far from the sound that made their debut album a success.', 2007, N'https://images-na.ssl-images-amazon.com/images/I/61czCc5z2-L._SL250_.jpg', N'http://www.amazon.com/gp/product/B000XNVS50/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000XNVS50&linkCode=as2&tag=westwindtechn-20&linkId=XHXIWUVQBIADPIYW', N'https://play.spotify.com/album/1jg4hDHRD1CpYZkWKuLX2Z')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (585, 343, N'Burn My Eyes', N'With "Burn My Eyes," Machine Head ratcheted up the intensity of early thrash metal to create a monstrous masterpiece of epic proportions. Call this oversimplification if you will, but this album is heavy, heavy, heavy', 1994, N'https://images-na.ssl-images-amazon.com/images/I/51PFLA1cWyL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000000H6G/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000000H6G&linkCode=as2&tag=westwindtechn-20&linkId=OJOQSDDQGRC6EDZ5', N'https://play.spotify.com/album/4S4WHsBRNEIha796lnU8NJ')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (587, 345, N'Rage against the Machine', N'Rage Against the Machine''s debut remains their strongest effort. When RATM made it big in the early 90s, they were a breath of fresh air. They were a distinctly groundbreaking and original band.', 1992, N'https://images-na.ssl-images-amazon.com/images/I/613YIki8JPL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00138KCC4/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00138KCC4&linkCode=as2&tag=westwindtechn-20&linkId=ORQKO3HAD6MS3RWG', N'https://play.spotify.com/album/4Io5vWtmV1rFj4yirKb4y4')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (588, 345, N'Battle of Los Angeles', N'Rage Against The Machine, in only 3 albums, has achieved the balance they''ve needed. Previously, their heavy messages and their particularly heavy music have clashed, but not on this album.', 1999, N'https://images-na.ssl-images-amazon.com/images/I/61zdg10yfSL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00002MZ2C/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00002MZ2C&linkCode=as2&tag=westwindtechn-20&linkId=YMR7EZHD4FWTM2KO', N'https://play.spotify.com/album/2eia0myWFgoHuttJytCxgX')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (590, 346, N'Kill the Power', N'This british band kicks out some heavy jams by mixing Nu-Metal with Reggae reminding a bit of Bad Brains, but with a new twist. Ninja especially is one to remember.', 2013, N'https://images-na.ssl-images-amazon.com/images/I/514%2Bxkp%2BMNL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00I4SKOH4/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00I4SKOH4&linkCode=as2&tag=westwindtechn-20&linkId=FEU2LATRV5GAKOUT', N'https://play.spotify.com/album/0WeHJSWG9mzVn7cxbbnj62')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (591, 347, N'Rock until you Drop', N'Crazy riffs, and whacky rythms drive this NWOBH band. Killer early days of metal. Not an easy listen, but it really grows on you!', 1983, N'https://images-na.ssl-images-amazon.com/images/I/31EZGWQVPTL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00004UAVG/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00004UAVG&linkCode=as2&tag=westwindtechn-20&linkId=SO7FFJEK57ADB2VI', N'https://play.spotify.com/album/5i5wz9ZNrVgqMvEWPqENXS/16QUqqV7mLIBwZcy4Cdj01')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (592, 348, N'Another Sad Story in the Big City', N'Two-Bit Thief  embraced more conventional hard rock on Another Sad Story In the Big City. Though the obscure band isn''t terribly original, most of the songs are gritty, catchy and honest.', 1990, N'https://images-na.ssl-images-amazon.com/images/I/51XxSF5k7EL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000008LTK/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000008LTK&linkCode=as2&tag=westwindtechn-20&linkId=PIM3OH7KV24TC7TI', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (593, 349, N'Bonded By Blood', N'There are very few albums out there that can match the intensity of this album from Bay Area thrash metal legends Exodus. Exodus are legends in the THRASH genre and this is where it all started.', 1985, N'https://images-na.ssl-images-amazon.com/images/I/517FBEA6X9L._SL250_.jpg', N'http://www.amazon.com/gp/product/B000003C4K/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000003C4K&linkCode=as2&tag=westwindtechn-20&linkId=DBKRRNULEL4OIR5P', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (594, 350, N'Born a Lion', N'OK, let''s be clear: You have to check your political correctness at the door when you listen to this one. But you''ll be rewarded with some of rawest AC/DC style rock you''ll ever hear. Rock on!', 2002, N'https://images-na.ssl-images-amazon.com/images/I/41KRS0GYXJL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00006D28C/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00006D28C&linkCode=as2&tag=westwindtechn-20&linkId=ZIA7IKB3CQ7JMDKX', N'https://play.spotify.com/album/2R6eAFZlJvbX5YqIVQIiIZ')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (595, 351, N'Punk''s not Dead', N'It''s difficult to overstate the significance of this album. With Sid Vicious dead in the late 1970s, many people announced punk  dead. 30 years later, this album is still considered by many  to be THE best punk album ever made.', 1984, N'https://images-na.ssl-images-amazon.com/images/I/61KDt79Zb5L._SL250_.jpg', N'http://www.amazon.com/gp/product/B000VZYZ0A/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000VZYZ0A&linkCode=as2&tag=westwindtechn-20&linkId=3BDYV6NNK3JLH4LD', N'https://play.spotify.com/album/0gnF0LzBQWEemZUMSrWKey')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (596, 90, N'Killers', N'By far Maiden''s most inspired work with wicked rythms and screaming leads, all while Paul Di''Anno''s screaming lyrics hold together the whole enterprise. It''s an awesome album that never gets old.', 1983, N'https://images-na.ssl-images-amazon.com/images/I/61iuaWquQdL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000063COZ/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000063COZ&linkCode=as2&tag=westwindtechn-20&linkId=F7Z3ZCNFGV5WAIT6', N'https://play.spotify.com/album/5mBRsY5eBzQuo5WfbjKItc')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (597, 352, N'Push', N'On Push, Gruntruck''s second album, the band discards some of its excessive Soundgarden influences and finds its own musical identity. Because of their vicious, sometimes atonal guitar riffage and sparing use of melody, the album only starts sinking in after numerous plays, but as is often the case in such situations, the listeners are ultimately rewarded for their patience.', 1992, N'https://images-na.ssl-images-amazon.com/images/I/51X5ambkqbL._SL250_.jpg', N'http://www.amazon.com/gp/product/B001NS09I6/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001NS09I6&linkCode=as2&tag=westwindtechn-20&linkId=GNUD3IVTDJUUBAO2', N'https://play.spotify.com/album/7scx6uSQSkcc0steQpvqRc')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (598, 598, N'Van Halen', N'Among revolutionary rock albums, Van Halen''s debut often gets short shrift. Although it altered perceptions of what the guitar could do, it is not spoken of in the same reverential tones as Are You Experienced? and although it set the template for how rock & roll sounded for the next decade or more it isn''t seen as an epochal generational shift as it should have been.', 1978, N'https://images-na.ssl-images-amazon.com/images/I/51GYwJYroKL._SL250_.jpg', N'ttp://www.amazon.com/gp/product/B00004Y6O9/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00004Y6O9&linkCode=as2&tag=westwindtechn-20&linkId=EQQMQ6W5R6WK6BOO', N'https://play.spotify.com/album/7G2PY8yve3Db0PeGsosb4x')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (599, 599, N'Blackout', N'Blackout was the Scorpions'' first majorly successful album, due to its clever balance of pop/rock (the title track), power ballads ("When the Smoke Is Going Down"), and catchy heavy metal ("Dynamite," "No One Like You"). Vocalist Klaus Meine had a throat operation prior to the record''s release, and surprisingly, his voice sounds more melodic and lively than ever. The rest of the band sounds great as well, and the album is highlighted by the fast-paced performances of guitarists Rudolf Schenker and Matthias Jabs. Blackout has arguably been called the Scorpions'' best record ever, and that statement is not unjust -- it has more energy than anything else they have ever released.', 1982, N'https://images-na.ssl-images-amazon.com/images/I/517y8sLrdpL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000001EUP/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000001EUP&linkCode=as2&tag=westwindtechn-20&linkId=L6SGWNNUJVF2SQOY', N'https://play.spotify.com/album/6x75r5C54z1quun86Bbqbr')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (600, 353, N'Blues for the Red Sun', N'With Josh Homme''s guitar tuned down two whole steps to C, and plugged into a bass amp for maximum distortion, stoner metal pioneers Kyuss achieve a major milestone in heavy music with their second album, 1992''s Blues for the Red Sun. Producer Chris Goss masterfully captures the band''s unique heavy/light formula, which becomes apparent as soon as the gentle but sinister intro melody gives way to the chugging main riff in the opener, "Thumb." This segues immediately into the galloping "Green Machine," which pummels forward inexorably and even features that rarest rock & roll moment: a bass solo. "Thong Song" alternates rumbling guitar explosions with almost complete silence, and "Mondo Generator" plays like an extended acid trip. The slow build of the epic "Freedom Run" and the driving "Allen''s Wrench" are also highlights, and though the album is heavy on instrumentals, these actually provide a seamless transition from song to song.', 1992, N'https://images-na.ssl-images-amazon.com/images/I/51rEIMI1dLL._SL250_.jpg', N'https://www.amazon.com/Blues-Red-Sun-Kyuss/dp/B000001A3H/ref=as_sl_pc_ss_til?tag=westwindtechn-20&linkCode=w01&linkId=NQC4553N5FEDBZUO&creativeASIN=B000001A3H', N'https://play.spotify.com/album/7wXj8GxTkGAUU99DXR7n2f')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (601, 354, N'Alchemy index, Vols. 3-4', N'Post-hardcore foursome Thrice seems to revel in pushing boundaries and overturning expectations. The second two-disc installment of THE ALCHEMY INDEX answers VOLS. 1 & 2 (FIRE & WATER) from the first set with VOLS. 3 & 4 (EARTH & AIR). There’s little evidence of the ferocious screamo aesthetic that characterized releases like THE ILLUSION OF SAFETY; instead AIR & EARTH ventures into mostly acoustic, highly melodic territory. The tight, technically complex instrumental prowess of the band is still on display, but the mood is much more atmospheric. The songs veer from ethereal and psychedelic to a more conventional folk or singer-songwriter vein (this is especially true of the tracks on the EARTH disc), but the whole adds up to an impressive, original showing from one of the genre’s innovators.', 2008, N'https://images-na.ssl-images-amazon.com/images/I/61AY91dfLAL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0015FS8QC/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0015FS8QC&linkCode=as2&tag=westwindtechn-20&linkId=2JW432WUQFTHXXBH', N'https://play.spotify.com/album/2FNlKycIizpYWMID16RMzO')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (603, 356, N'Feel the Darkness', N'Portland, Oregon''s Poison Idea were never a subtle act. In fact, they resided at the furthest end of the opposite spectrum, fusing the pummeling rhythm section of heavy metal, with the crunching three-chord speed and fury of American hardcore, topped off with Jerry A.''s snarling, larger than life baritone, spitting out declamation after declamation against the world. That would be larger than life in more ways than just his Stentorian roar: Jerry, like guitarist Pig Champion, and for that matter, drummer Thee Slayer Hippy, are veritable giants, in height and girth.  Feel the Darkness is, simply stated, Poison Idea''s most blistering moment in the sun, a steamrolling mass of furious speed and aggression, tempered with excellent drum and guitar work.', 1990, N'https://images-na.ssl-images-amazon.com/images/I/51kunRuJf1L._SL250_.jpg', N'http://www.amazon.com/gp/product/B000001IRR/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000001IRR&linkCode=as2&tag=westwindtechn-20&linkId=HS5XUDDQ5JYHRR6E', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (604, 357, N'Never Again', N'For the uninitiated to the quintessential hardcore band, this compilation, originally released in 1984, is essential. Not to be confused with the EP of the same name, the full-length collects the finest moments of Discharge with 17 tracks culled from the band''s ample discography of mini albums and 7" singles from its peak period. The choice cuts "Warning," "Never Again," and "Hear Nothing, See Nothing, Say Nothing" may dispel some myths about the invention of the hardcore movement, as Bad Brains, Black Flag, Minor Threat, and even Metallica were all clearly influenced by this phenomenally noisy punk unit -- not to mention the entire grindcore scene of Carcass, Godflesh, and especially Napalm Death, all of which have their roots in the extreme noise terror of Discharge. Many of the singles are unavailable elsewhere, making this an excellent intro to one of punk rock''s most ferocious groups.', 1984, N'https://images-na.ssl-images-amazon.com/images/I/41WaX95RAjL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00ECS3P3U/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00ECS3P3U&linkCode=as2&tag=westwindtechn-20&linkId=DNJ7DEIRZSBHREL5', N'https://play.spotify.com/album/5WptVwtq5N30bL2qTYyiyX')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (605, 358, N'City Baby attacked by Rats', N'Britain''s G.B.H. exemplified what happened after the promise of 1977 punk and post-punk petered out: faster, fuzzier tempos that incorporated lightning-fast guitar licks and a greater volume to put the point across. The mingling of Marshall stacks and "screw you" attitudes has often made for an uneasy marriage.', 1982, N'https://images-na.ssl-images-amazon.com/images/I/61eti8wYrVL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00005YUAG/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005YUAG&linkCode=as2&tag=westwindtechn-20&linkId=EYPGMMUR2IBX4B55', N'https://play.spotify.com/album/3E9flqSwqJRUuhZ3l4K8S6')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (606, 359, N'Slip', N'Quicksand forge out a dense, metallic grind that sounds like a more streamlined version of Fugazi. The band''s debut, Slip, relies more on metal than punk, but that makes the music all the more effective -- the group''s attempts at punky fury simply aren''t as strong as their brutal, gut-level heavy riff-rockers. Vocalist Walter Schreifels spews out enough angst-ridden lyrics, but what is important is how his voice fits into the dense wall of sound. Quicksand''s music is about powerful anger, and the persistent, bludgeoning Slip delivers the goods.', 1993, N'https://images-na.ssl-images-amazon.com/images/I/617lUSIPc5L._SL250_.jpg', N'http://www.amazon.com/gp/product/B000001E0G/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000001E0G&linkCode=as2&tag=westwindtechn-20&linkId=NEAM3N4L4NXLXUZA', N'https://play.spotify.com/album/3LVYsDFVGuPE7kNQyXZvgp')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (607, 50, N'Master of Puppets', N'This album stands as Metallica''s master-piece, captured in their prime and on their way to the very top of the metal world. An amazing album with breadth of sonic variety and some quite decent lyrics even. Sadly this was Metallica''s last album with bassist Cliff Burton which ended up changing the band drastically from it''s unique roots.', 1995, N'https://images-na.ssl-images-amazon.com/images/I/519ZXOc3EuL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00EBDXTJG/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00EBDXTJG&linkCode=as2&tag=westwindtechn-20&linkId=CYDRTLQJJPSYCUSF', N'https://play.spotify.com/album/5bqtZRbUZUxUps8mrO9tGY')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (609, 360, N'British Steel', N'The guitar riff from "Breaking the Law" is one of the most recognizable from early 1980s heavy metal. Though British Steel sounds dated these days, it''s also a classic slice of metal, one of the best from a band that defined the genre in the late ''70s and early ''80s. Everything that ultimately became characteristic of heavy metal is here, from the lightning-fast riffs on "Rapid Fire," the anthemic "Metal Gods," and "United" to the obligatory party song "Living After Midnight" to the equally obligatory youth-rebellion song, "You Don''t Have to Be Old to Be Wise." British Steel is unquestionably Priest at their peak. The 2001 remastered reissue includes two bonus tracks--a previously unavailable studio selection called "Red, White & Blue" and a live take on "Grinder."', 1980, N'https://images-na.ssl-images-amazon.com/images/I/5152rwromEL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00005K9LN/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005K9LN&linkCode=as2&tag=westwindtechn-20&linkId=SWNNTS746JMIVOPS', N'https://play.spotify.com/album/5bqtZRbUZUxUps8mrO9tGY')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (610, 360, N'Unleashed in the East', N'Judas Priest''s first official live recording has always been met with equal amounts of acclaim and controversy: acclaim from those who consider it an excellent summation of the metal legend''s 1970s output, and controversy from the critics and industry insiders who criticized what they believed to be a heavily overdubbed and studio-enhanced performance, mockingly naming it Unleashed in the Studio at times.', 1979, N'https://images-na.ssl-images-amazon.com/images/I/51TW%2B5FuZgL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00138J9HI/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00138J9HI&linkCode=as2&tag=westwindtechn-20&linkId=C4TY6NJL2K6252UM', N'https://play.spotify.com/album/2NDFw84v8oUouELMdzeYsb')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (611, 335, N'Lateralus', N'After an exhaustive five-year litigation battle between the band and their label management, Tool offer up the latest chapter in their musical self-discovery in Lateralus. Make no mistake, this is a prog rock record, reminiscent of King Crimson and Meddle-era Pink Floyd, with a hint of Rush mutated with Tool''s signature sonic assault on the ears. Lateralus demands close listening from the first piece onward, as it becomes quickly apparent that this is not going to be an album one can listen to and accept at face value. Complex rhythm changes, haunting vocals, and an onslaught of changes in dynamics make this an album other so-called metal groups could learn from.', 2001, N'https://images-na.ssl-images-amazon.com/images/I/41fos%2BEksdL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00005B36H/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005B36H&linkCode=as2&tag=westwindtechn-20&linkId=YXBBGETMZWRWWQ63', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (612, 361, N'Kollaps', N'Einstürzende Neubauten''s first album, as one might imagine, is their most primitive and radical effort, the purest expression of their original aesthetic. This makes the album both historically significant and conceptually intriguing, of course, but what''s most interesting about this album is that it still sounds surprising decades after its release. Often, albums that are considered extreme art statements upon their debut sound almost quaint a few years later, but while Kollaps perhaps sounds less extreme to ears that heard industrial music turned into disco pabulum by the likes of Nine Inch Nails than it did before, songs like the eight-minute title track and the rumbling live closer, "Negativ Nein," are still a fascinating blend of rhythm and random bashing, tonality and atonality, with anguished vocals by Blixa Bargeld that often seem to have little connection with anything else in the piece. The brief tracks, like the 80-second "Sehnsucht," are even more extreme explorations of pure noise. Starting as early as the next album, Einstürzende Neubauten would begin slowly introducing more mainstream musical concepts into their aesthetic, making Kollaps as undiluted a listening experience as there is in the entire catalog.', 1981, N'https://images-na.ssl-images-amazon.com/images/I/41WpJeCeI4L._SL250_.jpg', N'http://www.amazon.com/gp/product/B00000APUA/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00000APUA&linkCode=as2&tag=westwindtechn-20&linkId=BMQ4N5TMLO3CBKRT', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (613, 328, N'Deliverance', N'With guitarist Pepper Keenan now at the helm as lead singer and principal songwriter, COC abandoned most of the punk influences of their crossover past and turned into a full-fledged Sabbath-inspired metal band with 1994''s Deliverance. Most of the songs on the album are built on monolithic power chords which range from ferocious speed on "Heaven''s Not Overflowing" and "Senor Limpio" to slower, groovier numbers such as "Broken Man" and leadoff single "Albatross." Second single "Clean My Wounds" also struck gold at rock radio with its staccato riffing, and "Seven Days" adds eerie guitar melodies to the mix. On the downside, the plodding title track (featuring vocals from returning founding bassist Mike Dean) gets a little tedious around the sixth minute, and a number of faceless guitar instrumentals are interspersed through the album, really breaking up its rhythm.', 1994, N'https://images-na.ssl-images-amazon.com/images/I/614vcC%2BoFkL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00138F16G/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00138F16G&linkCode=as2&tag=westwindtechn-20&linkId=5ZVGYK5HPOB4H4DE', N'https://play.spotify.com/album/6zdNTQ1uS2ZzFZkExMqcAh')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (614, 350, N'We Sweat Blood', N'All of the warning signs are right there on the cover: the band name in a jagged and stylized font, a close-up on someone playing an electric guitar, and dripping blood. Yeah, that''s right, this is a metal album. It was pretty clear on Born a Lion that Danko Jones was already heading in this direction, with loud boogie-soaked riffs that owed more to AC/DC than the revved-up funk that served as the bedrock of the group''s two early EPs. Not that you''d confuse We Sweat Blood for commercial-grade metal: there''s very little bombast and absolutely zero hand-wringing earnestness here. The production is incredibly crisp -- instead of soaking everything in sight with reverb, most of the vocals are clean and the drums snap like whip cracks -- and the performance is very clean, with no pointless wailing from either the vocals or guitars. Everything has been stripped back to the basics: sex, Satan, and super-high volume. Sure, the lyrics are so over the top in places that it''s almost like the band has become a cartoon: in the album opener, "Forget My Name," "She makes me forget my name" is followed up by "I wanna, I wanna, I wanna burn in Hell with you." Elsewhere, "Baby I want to put some mileage on your lovebike/I want you out on the road with my testosterone make you feel alright" is delivered with a straight face. There''s even a tribute to one of fellow Canadian Neil Young''s sillier lyrics. Deathless prose for the ages this ain''t, but it doesn''t really matter, because the groove is deep, the rock is hard, and those who aren''t shaking their hips will probably be resisting the urge to follow along on the ol'' air guitar. Yow.', 2003, N'https://images-na.ssl-images-amazon.com/images/I/51cUqnx%2BvCL._SL250_.jpg', N'http://www.amazon.com/gp/product/B008V0OKMA/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B008V0OKMA&linkCode=as2&tag=westwindtechn-20&linkId=VJB4PBUQZQCV2EPB', N'https://play.spotify.com/album/64aEErWzw99Ceaf93kZzpf')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (615, 331, N'No sleep ''til Hammersmith', N'Released in 1981, the live album No Sleep ''Til Hammersmith recaps the highlights from the legendary run of albums Motörhead released during the prior few years, namely Overkill, Bomber, and Ace of Spades. The band''s lesser self-titled debut album is also accounted for here with two inclusions ("Motörhead" and "Iron Horse"), but by and large, the focus is on the standout songs from the aforementioned trio of classics. This alone makes No Sleep ''Til Hammersmith noteworthy, for it plays like a greatest-hits set, opening perfectly with "Ace of Spades." But what makes it all the more noteworthy -- and more than simply a run-of-the-mill, gap-filling live album -- is the performance: in a word, it''s breakneck. The trio of Lemmy (bass and vocals), "Fast" Eddie Clarke (guitar), and "Philthy Animal" Taylor (drums) absolutely rips loose through this 11-song set, upping the intensity and speed of the already intense and speedy studio recordings. Yes, believe it or not, these performances are even more crazed than their studio-recorded counterparts. Of course, the fidelity isn''t as clear and the instruments aren''t nearly as in relief, since this is a live recording (and while it''s of high quality for live recordings of its day, it''s relatively lo-fi by today''s standards). Still, the breakneck nature of this performance distinguishes No Sleep ''Til Hammersmith from its studio predecessors, making it an excellent, recommended complement to those essentials. Moreover, it''s an important release because it captures Motörhead live during the peak of the classic lineup''s rise to fame. Motörhead could do no wrong at this point in time, as they were laying the foundation for the coming thrash movement, in a way, and their winning streak continues here on No Sleep ''Til Hammersmith, one of the best live metal albums of all time.', 1981, N'https://images-na.ssl-images-amazon.com/images/I/51Uxzn1PznL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000QZZBB2/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000QZZBB2&linkCode=as2&tag=westwindtechn-20&linkId=SHL3VCKDT4A66C52', N'https://play.spotify.com/album/6wx6UUBEUt8SFNzh6Nc3k3')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (616, 362, N'American Paranoia', N'Screaming ''86-era political hardcore/metal crossover from Attitude Adjustment of the East Bay of Northern California, quite possibly the best of its genre. Fast, musically tight, well-produced, this rare piece of Pusmort vinyl CD re-issue is a must-own.', 1986, N'https://images-na.ssl-images-amazon.com/images/I/61iaOB91X6L._SL250_.jpg', N'http://www.amazon.com/gp/product/B000024VGR/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000024VGR&linkCode=as2&tag=westwindtechn-20&linkId=BIWHDZDBGW7Z5M5R', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (617, 340, N'In Aller Stille', N'In Aller Stille is the 11th record by longstanding German punk band Die Toten Hosen. It was released in 2008, after a four-year pause in recording, and was well received by the audience -- in Germany it went to number one and was certified triple gold. The album was also available as a deluxe edition that featured a bonus DVD with a video for the first single, "Strom," and a documentary about the career of Die Toten Hosen.', 2008, N'http://cps-static.rovicorp.com/3/JPG_400/MI0001/781/MI0001781202.jpg?partner=allrovi.com', N'http://www.amazon.com/gp/product/B001MEZK5I/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001MEZK5I&linkCode=as2&tag=westwindtechn-20&linkId=EBGFDC4NVI2JYQVL', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (618, 1, N'Dirty Deeds Done Dirt Cheap', N'While Dirty Deeds Done Dirt Cheap sounds like every other AC/DC album, it is distinguished by a lyrical puerility spectacular even by Bon Scott''s standards. Two tracks--"Love at First Feel" and "Squealer"--are ruminations on the morality of sex with schoolgirls. "Big Balls," ostensibly a narrative from the perspective of an aristocrat socialite, is actually a somewhat labored excuse for the band to chant "We''ve got big balls." This juvenile posturing was, to a large degree, AC/DC winding up their burgeoning foreign audience by playing to stereotypical expectations of Australians. On Dirty Deeds, however, AC/DC try too hard. Only on "Ain''t No Fun (Waiting Round to Be a Millionaire)" is Scott''s laconic wit deployed to real effect: the sheer glee in the line "Get your fuckin'' jumbo jet off my airport!" is almost worth the album''s purchase price.', 1976, N'https://images-na.ssl-images-amazon.com/images/I/61kTaH-uZBL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00008BXJ4/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00008BXJ4&linkCode=as2&tag=westwindtechn-20&linkId=OVEKRHYO5Z34VVMQ', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (619, 340, N'Zurück zum Glück', N'Die Toten Hosen are getting old. And better at their craft - the end result is a record that feels a lot more mature than their previous efforts but still retains much of the fun and hard edge of the past. This record has a fair bit of variety and while the slower songs might turn off older fans, the variety makes this record one that stays on cue much longer than you would expect one from Die Toten Hosen to be.', 2004, N'https://images-na.ssl-images-amazon.com/images/I/51xkUx4Kt0L._SL250_.jpg', N'http://www.amazon.com/gp/product/B001MFH9T2/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001MFH9T2&linkCode=as2&tag=westwindtechn-20&linkId=U4D57VKO3JS4WBJI', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (655, 7, N'The Good Bad The Obnoxious', N'This release is a collection of covers done by the San Francisco based Hardcore band Attitude. It''s an eclectic mix of Punk, Country and Rock classics done in a very unique and punky style that while not always true to the originals, is very enjoyable and sure to get your blood going. This EP is rounded out by one original track Freak, which is a bit of a departure for the band, dipping a bit into industrial territory.', 1987, N'http://www.metal-archives.com/images/2/7/4/9/274914.jpg?0427', N'n/a', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (659, 632, N'Act III', N'Act III  is the third studio album by the thrash metal band Death Angel, released in 1990 on Geffen Records. Regarded by many critics and fans as the band''s finest effort, the album was produced by famed metal producer Max Norman (Ozzy Osbourne, Megadeth, Loudness), and marked the first (and only) major label release by Death Angel. The album spawned the singles "Seemingly Endless Time" and "A Room with a View", with both songs receiving music videos and airplay on MTV''s Headbangers Ball. Songs like "Discontinued" incorporate elements of funk.

@icon-warning On tour in support of Act III in 1991, the band suffered a serious tour **bus crash** in which drummer Andy Galeon was critically injured. During his yearlong recovery, singer Mark Osegueda left the band, effectively ending Death Angel. In 2001, the band reunited for Testament singer Chuck Billy''s Thrash of the Titans benefit concert (minus Gus Pepa) and went on to release The Art of Dying in 2004, followed by three more albums.', 1990, N'https://images-na.ssl-images-amazon.com/images/I/51xWXhuTiZL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0085LGSD4/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0085LGSD4&linkCode=as2&tag=westwindtechn-20&linkId=FFHUXDGAYHSQRISL', N'https://play.spotify.com/album/1Dj4ZFmEwdSTLHxFMRWYx4')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1644, 631, N'Melissa', N'Technically, Mercyful Fate''s debut LP is slightly patchy and derivative, particularly of early Black Sabbath and Judas Priest, although in parts it is more ambitious than those bands'' major works, in a `proggy'' kind of way. It also sounds a bit dated in parts. In terms of originality, craftsmanship, instrumental prowess, and King Diamond''s application of his unique and controversial voice and vocal range, it was comprehensively surpassed by Diamond''s later solo classics (particularly Them, Conspiracy, and The Eye), and even by Mercyful Fate''s 1993 reunion album, In The Shadows (although I prefer the more dynamic rhythm section on Melissa than those on The Eye or In The Shadows).
What puts this album in a supreme league of its own is a wickedly powerful aura that builds up throughout the album, which is something that no amount of musica training can achieve, and no review can adequately reflect. Reviewer ''stevex3'' gives us a taste when he says ''I''m sure that this CD gets played at every gathering of demons, but you really cannot have any idea what that means unless you experience this album for yourself (preferably played loud in the dark), as different people will experience it differently, and will undoubtedly have a hard time explaining their experience.', 1982, N'https://images-na.ssl-images-amazon.com/images/I/415gmX9ujaL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0011ZVVJ2/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0011ZVVJ2&linkCode=as2&tag=westwindtechn-20&linkId=GHOXSGQGTIORXIBC', N'https://play.spotify.com/album/6Ig4BhZgma0ubEVgNaMpeo')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1704, 1686, N'Suffer', N'Perfection. Snotty. Furious. High-minded. Vitriolic. Probably kick-started thousands of bands. And what perfect cover art. The lyrics to this hit you like a brick to the back of the head, but a brick that you have come to love and cherish.', 1988, N'https://images-na.ssl-images-amazon.com/images/I/51%2BCTN0uNQL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000YQUOGU/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000YQUOGU&linkCode=as2&tag=westwindtechn-20&linkId=C3TBDOJ5XA5QLDW2', N'https://play.spotify.com/album/3SsWXUMMsBgqmACSGh25Ak')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1705, 1686, N'The Process of Belief', N'Bad Religion is more than just a punk rock band. They are a punk rock institution. They have existed for almost 20 years and have always been a part of the musical evolution that is independent music. Your Blink 182s, your Sum 41s, your New Found Glories; none of them would exist if it wasn''t for Bad Religion. It is only fitting, then, that "The Process Of Belief" blows all of those bands [and about a million more] out of the water.
The most-hyped point about this album, of course, is the fact that guitarist/songwriter Brett Gurewitz is back in the band after the band''s somewhat-failed stint on major label Atlantic Records and subsequent return to Brett''s own label Epitaph. What does this mean? It means that vocalist Greg Graffin and Gurewitz wrote together for the first time significantly since 1994. This is the punk rock equivalent of John Lennon and Paul McCartney getting the band back together. If you''re not familiar with them [and if that''s the case, I feel sorry for you], maybe the basketball analogy of Michael Jordan and Phil Jackson both reuniting with the Chicago Bulls at the same time could help you understand the importance of the situation better. This is a huge deal, and the album definitely lives up to the pressure put upon it.
From the second you press play, the disc shows no intention of letting up on intensity. The trio of opening tracks "Supersonic," "Prove It," and "Can''t Stop It" plow through the listener in barely more than 3 minutes total, shushing all nay sayers who said this band had lost their passion for their music. The band has rarely sounded tighter with music this fast.', 2005, N'https://images-na.ssl-images-amazon.com/images/I/51Qxr%2B4re-L._SL250_.jpg', N'http://www.amazon.com/gp/product/B000X6ZBGO/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000X6ZBGO&linkCode=as2&tag=westwindtechn-20&linkId=ER5ONY3THHADNM4C', N'https://play.spotify.com/album/5IgYdDyLSWN0AnUaCHomRE')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1707, 632, N'The Ultra Violence', N'Homegrown Death Angel is a legend in the thrash and speed metal scene. Their first album, "Ultra-Violence" is the best of the three. Yea, it''s pure speed metal allright but brutal speed metal. Not a light hearted affair at all. In terms of speed metal this is as fast as landmark albums like Reign in Blood, or Kill ''Em All. Best tracks are Ultra Violence (which actually has a frew chords stolen from Iron Madien at the start and end, but a very good 10 minute song!), Mistress of Pain, and Thrashers. However they are all good, just some better than others! If you''re an old school metal guy, you can''t lose on this one. BTW, don''t miss Death Angel at Maritime on August 11th! First time they have played in 10 years.', 1987, N'https://images-na.ssl-images-amazon.com/images/I/51Ll5XjxHiL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0085LIBUW/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0085LIBUW&linkCode=as2&tag=westwindtechn-20&linkId=NERVFTIHTBJTBWLX', N'https://play.spotify.com/album/35flmem6J4bq04Kvib1ghA')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1708, 1687, N'Among the Living', N'Most speed metal fans were initiated by way of either Metallica or Megadeth. Anthrax was my introduction. Albums like this speak to the fifteen year-old in us that gets tired of turning on the radio and hearing only prefabricated crap. 13 years after first hearing this album, and owning it both as cassette and CD, I''m proud to say I still enjoy it.

What isn''t to like about it? Out of The Big Four ( Anthrax, Magadeth, Metallica, and Slayer), Anthrax possibly had the best singer. Joey Belladonna, silly hairdo and all, had a tremendous voice. The guitar team of Scott Ian and Dan Spitz was bulletproof. Spitz was possibly the most underrated lead guitarist in all of heavy metal. He sounded like nobody else. Ian deserves a place in the pantheon of great rhythm guitarists. The uncle-nephew rhythm section of Charlie Benante and Frank Bello is unforgettable. Benante had to have been hiding two or three extra arms somewhere. And last but not least, Bello played without a pick like all real bassists. Plus he played FAST.
And finally, Anthrax showed the greatest imagination and diversity with their lyrics on this album. "I Am the Law" is about Judge Dredd. "Among the Living" and "A Skeleton in the Closet" are based on Stephen King''s work. "N.F.L." is about a fallen comedian, either Lenny Bruce or John Belushi I think. The arms race, particularly under Reagan, was attacked in "One World". And who can forget the anti-racism classic "Indians"? The lyrics were written by juveniles on ATL. Smart juveniles.', 1988, N'https://images-na.ssl-images-amazon.com/images/I/51gh0LPePJL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000W0B0KM/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000W0B0KM&linkCode=as2&tag=westwindtechn-20&linkId=TNLABEIZTAU2JKGF', N'https://play.spotify.com/album/4Y2jEzU70sLpTCMCl6JE0t')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1709, 1687, N'Sound of White Noise', N'This album rocks from start to finish and is easily one of the best Anthrax albums especially Belladonna days. This album was widely more accepted in a grunge filled time, when bands like Motley Crue, Judas Priest and Iron Maiden also tested the waters by releasing new music with a different vocalist. While I like all those mentioned bands and their respective albums, SOWN was critical praised and successful to where Anthrax fans new and old gobbled it up. One of my all time favs from 1993 or from any era. Armored Saint frontman John Bush saved Anthrax... for a while anyway. I liked Joey Belladonna, but Bush gave Anthrax a more bluesy muscular feel.', 1993, N'https://images-na.ssl-images-amazon.com/images/I/51ewpwUVQZL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0018C2W7S/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0018C2W7S&linkCode=as2&tag=westwindtechn-20&linkId=KGLFNCPFU4F2ZAJG', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1710, 335, N'Aenema', N'With its heavy-duty distortion, weighty rhythms, and cynical lyrics, Tool is a heavy metal band for the ''90s. Rather like Metallica circa ...And Justice for All, the sound is focused heavily on texture, with vocals and guitars layered one atop the other, and heart-pounding drums underlying everything. There''s not a whole lot of variety on Tool''s second full-length album--most of the songs start off fairly low-key, kicking into high gear for the chorus, and repeat--but Maynard James Keenan''s distinctive voice, the prog-rock stylings over a heavy metal base, and a supremely unhealthy dose of vitriol make this the perfect album to bang your head to.', 1996, N'https://images-na.ssl-images-amazon.com/images/I/51RpKf9APDL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00000099Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00000099Y&linkCode=as2&tag=westwindtechn-20&linkId=333T3S6PUBB3SSZH', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1711, 332, N'Souls at Zero', N'Souls at Zero, originally released in 1992, was Neurosis''s first flash of true brilliance. Retaining their concussive and visceral punk roots, the band took their first solid steps into previously uncharted territory-employing non-traditional instruments, tribal chants, radically slower tempos and densely layered, folk-influenced melodies, essentially creating a post-metal blueprint in the process. "Sterile Vision" breathes with a barbaric folk tinge, while the menacing industrial rhythms of "Flight" and "The Web" steamroll the senses. The maniacal trepidation of "Zero" acts as the ying to the melancholic yang of "Empty." Neurot Records is proud to keep the flame burning with this deluxe reissue. Adding demo versions of "Zero" and the title track along with a bonus live cut, the updated Souls at Zero is a vital document of one of the most influential bands in heavy music. Redesigned artwork by the revered Josh Graham completes a package worthy of timeless worship.', 1992, N'https://images-na.ssl-images-amazon.com/images/I/51LqI3D-P2L._SL250_.jpg', N'http://www.amazon.com/gp/product/B001A3AA5Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001A3AA5Q&linkCode=as2&tag=westwindtechn-20&linkId=R3RIBWGECJRC3RLY', N'https://play.spotify.com/album/59OB25QMZLjQCQ2LEs4npB')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1712, 1686, N'Stranger than Fiction', N'Bad Religion, one of the last bands you''d expect to join the ranks of major-label rockers, makes the leap from its own Epitaph Records to Atlantic for its eighth album, Stranger Than Fiction. The quintet doesn''t compromise its integrity or its aesthetics, delivering its familiar Ramones-style pop songs at crash-and-burn tempos and continuing to rail against business as usual in corporate America. (The band''s social critiques have always been a cut above the average hardcore punk''s, as befits a group led by a vocalist pursuing his PhD at Cornell.) Especially effective is the opening track, "Incomplete," which features guest guitar by Wayne Kramer of the MC5.', 1994, N'https://images-na.ssl-images-amazon.com/images/I/4193PWZJ4SL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000002J11/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000002J11&linkCode=as2&tag=westwindtechn-20&linkId=NDCTI2LFALQ5IQ3R', N'https://play.spotify.com/album/5Rr6XWVvbdhuCASYFW0voM')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1715, 2, N'Breaker', N'This album is ACCEPT''S turning point album in my opinion, the album that defined their style ACCEPT''S BREAKER Album, which is ACCEPT''S 3rd album released in 1981 in the U.K. and Europe again, still no U.S. market yet
ACCEPT had more money this time for a better produced album and 10 excellent Hardrockin''/Heavymetal tracks to go with it . No rock ballads like their previous album 1980''s I''M A REBEL which i''ve also typed a review about all Great Heavy metal riffs on this album.', 1982, N'https://images-na.ssl-images-amazon.com/images/I/51fIOETov9L._SL250_.jpg', N'http://www.amazon.com/gp/product/B0007ZBG1U/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0007ZBG1U&linkCode=as2&tag=westwindtechn-20&linkId=ZPNI5HMO3ZTBZQJ3', N'https://play.spotify.com/album/70lhKu95Wy760ZAZeUaZje')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1716, 352, N'Inside Your''s', N'Heavy yet Melodic, "Inside Yours" was as impressive and real as anything that was coming out of Seattle at the time.

A lot has been said in terms of what influenced grunge in its form. Most point to a collision of punk and arena rock, which is indeed true, however the influence of 70''s era funk was evident in the sence that a lot of ''grunge" though heavy and aggressive, had a groove not found in other forms of hard rock (excepting of course, bands who wore their funk influences on their musical sleeves like the Red Hot Chili Peppers, Primus and Big Chief)

In grunge that funk influence was more sublime, more integrated and thus giving the melodies and power chords a sense of motion which made for some compelling music. Gruntruck embodied this with tracks like "Paint" and "So Long" which bust into power funk tangents amid the sweat and leather aesthetic, giving the general sound a psychedelic elegance that typified "grunge". All art-phaggy posturing aside, I sum this record up as just plain rockin'' and is a document of the last truly innovative movement of Rock and Roll.', 1992, N'https://images-na.ssl-images-amazon.com/images/I/51Gkyj0q6WL._SL250_.jpg', N'http://www.amazon.com/gp/product/B002S1XKTC/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B002S1XKTC&linkCode=as2&tag=westwindtechn-20&linkId=32NMIFC3DC4YE62Q', N'https://play.spotify.com/album/1HBOGOVhWOz5k4XqU6h4h5')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1717, 331, N'Iron Fist', N'As with previous albums, recording commenced with producer Vic Maile at his Jackson''s Studio in Rickmansworth in 1981. A break in recording for the band to play some November and December dates with Tank was followed by Clarke producing Tank''s debut album with help from Will Reid Dick. Clarke was unhappy with the Maile produced sessions and decided that the album should be recorded themselves, although Lemmy lamented at the time that "it''s a shame to have lost Vic in a way because I thought it was successful".

The album was recorded during the best part of late January and February 1982 at Morgan Studios and Ramport Studios in London, with Clarke producing and Dick engineering. The band retrospectively acknowledge that this was a bad move, with Lemmy claiming in 2000 that the album was "bad, inferior to anything else we''ve ever done. Having Eddie produce it was a mistake that even he would now probably admit to".[7]

The writing of lyrics and recording of vocals are tasks that Lemmy performs once the recording of the music has been completed. Struggling to think of a name for the title track for the album, he remembered the time the band had performed live under the name Iron Fist and the Hordes from Hell for contractual reasons (a subsequent album What''s Words Worth? was released of that event), and decided this was an apt name for this project. The name was eventually shortened to simply Iron Fist.', 1982, N'https://images-na.ssl-images-amazon.com/images/I/41AZHMXJEJL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00005NQIF/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005NQIF&linkCode=as2&tag=westwindtechn-20&linkId=I3YRQODVGFZ5JE4H', N'https://play.spotify.com/album/2TMefJ7gbZBQcOo0e0Lu8P')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1718, 1694, N'Angelwitch', N'This NOWBHM classic is widely regarded amongst fans as the band s finest hour. This 30th Anniversary Deluxe Expanded Edition of the band s 1980 album includes the entire recorded output from this era ; BBC Friday Rock Show session tracks along with a complete second disc of rare demo s, alternative versions and 12 single mixes, makes this the definitive Angel Witch Anniversary collection. 30 tracks.', 1979, N'https://images-na.ssl-images-amazon.com/images/I/41QzUbIXJUL._SL250_.jpg', N'http://www.amazon.com/gp/product/B003IBFP3K/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B003IBFP3K&linkCode=as2&tag=westwindtechn-20&linkId=ZPUTZUBTN5EVWPV6', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1719, 1, N'Highway to Hell', N'"Highway To Hell", released in 1979 was lead singer Bonn Scott''s last album with AC/DC due to his untimely death. The album was a landmark for AC/DC and included their first ever radio hit (in the U.S.) in "Highway To Hell". The album is a hard rock lover''s dream, with big power chords, lead breaks and powerful vocals. The songs that standout on this release (which make up for more than half the album) are the title track "Highway To Hell", "Girls Got Rhythm", "Shot Down In Flames", "Get It Hot", "If You Want Blood (You''ve Got It)", "Walk All Over You", and "Touch Too Much". This newly remastered cd which is now under the Epic label sounds much better than the older 1994 remastered version. The bottom end, mid-range and output level have all been increased dramatically. I''ve actually compared them and found this new release to be the superior of the two. The digipak that holds the cd is very attractive and includes a booklet with colorful photos, etc. If you enjoy groups such as Judas Priest, UFO, Def Leppard, Krokus, Scorpions, etc. than you''ll won''t be disappointed with "Highway To Hell', 1979, N'https://images-na.ssl-images-amazon.com/images/I/61UVfrLJq2L._SL250_.jpg', N'http://www.amazon.com/gp/product/B00O6L3AFQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00O6L3AFQ&linkCode=as2&tag=westwindtechn-20&linkId=7NVM4HZJO5LTJNST', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1720, 1, N'Power Age', N'Powerage is the best rock ''n roll of album of all time. Not the most important or most influential; not with the widest variety nor highest reach(although this IS AC/DC''s widest & highest album); not the most seductive or inspiring; but the best.

An amazingly raw, blistering sound, but at the same time incredibly tight grooves. Hard rock you can headbang AND dance to, indeed. Like someone once said, AC/DC does what no one else can do, better than anyone else.

This was the first album w/Cliff Williams and he kicked the band up to a whole new level. Fantastic production by Vanda/Young, the last one they did before Mutt Lange took over. The remastering is indescribably brilliant, showcasing the equally brilliant interplay between Angus & Malcolm. The lead & rhythm guitars are distinct, loud, and powerful. No way you''d believe this album was released in 1978 if you didn''t already know.

And what rhythms and leads they are. Nine incredible riffs, instantly memorable. Easy to play(the riffs NOT the solos, of course), perhaps, but almost impossible to write. And the seven solos are among Angus'' best, especially on Gone Shootin''. Fast solos, medium solos, slow solos, and on Damnation & Bullet no solo at all.', 1978, N'https://images-na.ssl-images-amazon.com/images/I/51kfuKwtSgL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00O75S240/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00O75S240&linkCode=as2&tag=westwindtechn-20&linkId=YLC4XQ4SNDDC5YVW', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1721, 3, N'Rocks', N'his is the REAL Aerosmith. You won''t find any of the sugar-coated, sell-out, mainstream geared crap that they''ve turned out in the 90''s. This is the raw, rockin'', and dangerous Aerosmith of the 70''s. There is not a weak track on this gem. From the rocking bass-driven "Back In The Saddle", to the bluesy jive of "Last Child", the fast-paced and reckless "Rats In The Cellar", the environmentally conscious "Nobody''s Fault", to the grandiose ballad "Home Tonight", etc., etc., etc., this album Rocks from start to finish. It is clear that so many bands that would come later were listening to this album way back when. Those people who think that what Aerosmith does now is great, needs to go back and listen to a REAL rock album, ROCKS. This is Aerosmith''s crowning achievemnet.', 1973, N'https://images-na.ssl-images-amazon.com/images/I/41DOkMbNVBL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00138JA4A/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00138JA4A&linkCode=as2&tag=westwindtechn-20&linkId=HTLCS3SKWZSZLJ3J', N'https://play.spotify.com/album/5Uv5LmSKTT9okGkr3l9MjR')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1722, 12, N'Paranoid', N'Though most of Black Sabbath''s classic material from this album ("War Pigs," "Iron Man," "Fairies Wear Boots," and the title track) can also be found on the collection We Sold Our Soul for Rock & Roll, Paranoid is essential for the completist. One of the best albums from one of the bands to define heavy metal, this album is chock-full of the best stuff from Sabbath''s Osbourne years. (Where else will you be able to hear "Rat Salad?") The music isn''t exactly complex, but it doesn''t need to be; its importance lies in its evocative power, with which any teenager will be able to identify.', 1971, N'https://images-na.ssl-images-amazon.com/images/I/51eWYD4dQcL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000002KHH/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000002KHH&linkCode=as2&tag=westwindtechn-20&linkId=G7KDKDH5X7YY7LQX', N'https://play.spotify.com/album/6r7LZXAVueS5DqdrvXJJK7')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1723, 631, N'Don''t break the Oath', N'Don''t Break the Oath" found Mercyful Fate at their apex. Loaded with satanic lyrics, incredibly complex guitar melodies, and King Diamond''s eerie voice, "Don''t Break the Oath" is one of the best albums to ever be found in black metal. "A Dangerous Meeting", "Desecration of Souls", "The Oath", and "Come to the Sabbath" are Mercyful Fate classics, and even the instrumental "To One Far Away" is pure metal joy. The band would breakup not long after "Don''t Break the Oath"''s initial release before getting back together some years later, but nothing they released since has compared to how powerful this album is. Contrary to what a previous reviewer has stated, it''s no secret that Mercyful Fate and King Diamond are not for everyone. Yes, King''s voice is an acquired taste to say the least, but this reviewer knows of fewer frontmen that can do lyrically and musically what King Diamond can; that''s why he''s been around for over 20 years. And I wouldn''t necessarily call Dio "real aggressive, kick a$$ metal" either.', 1984, N'https://images-na.ssl-images-amazon.com/images/I/51p8MBOTgTL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0011ZWNC6/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0011ZWNC6&linkCode=as2&tag=westwindtechn-20&linkId=7I5ICIPFXBWHWUIP', N'https://play.spotify.com/album/76qLOTDutH2qCoP0imlhXw')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1724, 599, N'Love Drive', N'The 1979 album "Lovedrive" by Scorpions is a tremendous effort, seemingly fueled by conflict, chaos, desperation, and fraternity, that rises to a level just short of perfection.

In 1978 Scorpions were in a rebuilding year, having just issued a pink slip to lead guitarist Ulrich Roth. The decision to jettison Roth (and all the Hendrix-ian baggage that came with him) was the first of many smart moves made by the band. Before "Lovedrive" was completed, the band would hire, record with, fire, then rehire Matthias Jabs. The band would also briefly rejoin with Michael Schenker(another great move), in what many fans have called the dream line up for Scorpions. Sadly, this line up only lasted a few months. Michael collapsed onstage during a performance with Scorpions in Europe, and chose to step down and go on sabbatical, but not before positively influencing the group as shown here.
Given the tumultuous circumstances under which the album was recorded, its'' a minor miracle the album is any good at all. "Lovedrive" however is a four star effort and I believe the best album ever made by Scorpions. Song writing, both musical and lyrical, are prime, and the group emotes all over this album without sounding ridiculous or tired.
The frantically paced classic "Another Piece of Meat"(boy meets girl, love goes wrong at Tokyo kick boxing match), the title song "Lovedrive"(girl-loves-guy/guy-loves-Porsche), and the fantastic "I Can''t Get Enough" (or "How I Learned to Stop Worrying and Love Hard Rock") are the three stand out numbers that efficiently showcase the strengths of Scorpions, effectively translating their live vibe onto', 1979, N'https://images-na.ssl-images-amazon.com/images/I/51Z6qS-HQwL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000001EUL/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000001EUL&linkCode=as2&tag=westwindtechn-20&linkId=GJHBWLEWMEBI6CND', N'https://play.spotify.com/album/7aIgGWlHdcPXOfONtXVliK/6Wse1ZMA9PbbTqZNvz4C2t')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1725, 328, N'Blind', N'To call this album a rock album would almost be an insult. Some people call it punk/hardcore, but to me it will always be metal. And now that I''ve pigeonholed this CD to death, I''ll move on to the music. Corrosion Of Conformity serves up some unforgiving, politically motivated anger with Blind. The guitar tone has a punishing crunch that has been hard to parallel in my mind. With the bass pushing that crunch, this is one heavy listen... I love it! Nothing will guarantee you a speeding ticket quicker than ''Dance Of The Dead'' or ''Mine Are The Eyes Of God''. ''Vote With A Bullet'' spells out COC''s political views very clearly, and also manages to wrap it up in one awesome tune! Even the slowest song on the CD, ''Echoes In The Well'', manages to churn out some dark and brooding overtones. Every single song on here is heavy and uncompromising. The lyrics are very poignant and intelligent. Amidst so many bands who, lately like to pose as revolutionary, Corrosion Of Conformity take a shot at ''The Man'' that is, without dispute, the most real and profound yet. A lot of bands have come and gone, taking some inspiration from Corrosion Of Conformity, yet these guys continue to go on (granted under a different style). This CD represents the high point of their songwriting and musical career.', 1986, N'https://images-na.ssl-images-amazon.com/images/I/41rsmZTWh9L._SL250_.jpg', N'http://www.amazon.com/gp/product/B0013D8FJG/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0013D8FJG&linkCode=as2&tag=westwindtechn-20&linkId=Q6ECTNHUXDX45GG5', N'https://play.spotify.com/album/7kLqk3fireCdZxAZmCud3k')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1726, 356, N'Kings of Punk', N'The "glory" days of Hardcore Punk for the most part were dominated by EPs. The cause of this phenomenon is quite simple: economics. Many young punks found the DIY route the only feasible way of getting their message and music across and distributed to their fans. Hence the late-70''s and early 80''s saw an explosion of underground DIY produced EPs (many packed with as many tunes as could be fit within the time constraints of the EP format) filled with photocopied inserts/lyric sheets and killer artwork (just think of all those classic records put out by SST, Dischord, Touch & Go, and hundreds of other killer DIY label/distros who clutter our record collections and shaped our minds). POISON IDEA-"Kings of Punk" is a different sort of animal: a full-fledged LP from the supposedly waning days of hardcore 1986. POISON IDEA from Portland burst onto the scene with the truly stand-out innovative "Pick Your King" EP in 1983. I don''t state this lightly, "Pick Your King" ranks along with NEGATIVE APPROACH''s debut EP, BLACK FLAG''s "Six Pack" EP, BAD BRAINS-ROIR Cassette, MINOR THREAT''s "Filler" EP, SS DECONTROL-"Kids Will Have Their Say" 12", SOA''s "No Policy" EP, YDI''s "A Place In The Sun" EP, STATE''s "No Illusions" EP, ANTIDOTE''s "Thou Shalt Not Kill" EP, and MDC''s "Multideath Corporations" EP, as a true seminal testament to the sheer power of the hardcore ethos. POISON IDEA''s "Pick Your King" EP garnered much praise and was followed up with the slightly meatier "Record Collectors Are Pretentious A**holes" 12" EP in 1984.', 1986, N'https://images-na.ssl-images-amazon.com/images/I/51W-Y1tm1jL._SL250_.jpg', N'http://www.amazon.com/gp/product/B000000ERQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000000ERQ&linkCode=as2&tag=westwindtechn-20&linkId=VOCZSREPJ5LMFC7G', N'https://play.spotify.com/album/2TuOFdm87pAnsXHaweOEpX')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1727, 1706, N'Siren Song of the Counter Culture', N'Chicago''s Rise Against might be seen as an outcast amongst its peers. Armed with The fury of classic punk acts such as Minor Threat & Bad Brains, they blend Intelligent vocals with a serious commitment to providing a positive alternative to the oft-dreary & disenchanted aura that engulfs most punk bands. "There are so many bands that sing about negative things, & we kind of wanted to show people it''s OK to voice your opinions & stay positive. We just wanted to be more productive, lyrically."', 2004, N'https://images-na.ssl-images-amazon.com/images/I/61K13NII61L._SL250_.jpg', N'http://www.amazon.com/gp/product/B0002KQOGW/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0002KQOGW&linkCode=as2&tag=westwindtechn-20&linkId=ZNRQUX2EJFDMEB2A', N'https://play.spotify.com/album/1vHYkIhnwbpzrC3hGguDN6')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1728, 1706, N'The Unraveling', N'Melodic punkers Rise Against have come a long way in a short time. In only five years they have released three albums, their latest for major label Geffen. In the wake of their commercial success the band went back and remastered their first full-length, The Unraveling. Originally released in 2000, this is the Chicago four-piece at their hardest. With breakneck drum beats, shredding guitars and a penchant for singing-into-screeching vocals, it''s no wonder that Rise Against''s fanbase is as diverse as it is. With a foundation of punk and elements of metal, hardcore and the occasional touch of emo, there is no doubt that this band has a little something to offer everyone. That is, as long as the person wants to rock.', 2004, N'https://images-na.ssl-images-amazon.com/images/I/51Pcubi7-ZL._SL250_.jpg', N'http://www.amazon.com/gp/product/B00005B8O2/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005B8O2&linkCode=as2&tag=westwindtechn-20&linkId=N4TOMIS3YGBZP5ON', N'https://play.spotify.com/album/1ifZw7Hhx71MUPqXBfM9A9')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1729, 631, N'Melissa', N'Technically, Mercyful Fate''s debut LP is slightly patchy and derivative, particularly of early Black Sabbath and Judas Priest, although in parts it is more ambitious than those bands'' major works, in a `proggy'' kind of way. It also sounds a bit dated in parts. In terms of originality, craftsmanship, instrumental prowess, and King Diamond''s application of his unique and controversial voice and vocal range, it was comprehensively surpassed by Diamond''s later solo classics (particularly Them, Conspiracy, and The Eye), and even by Mercyful Fate''s 1993 reunion album, In The Shadows (although I prefer the more dynamic rhythm section on Melissa than those on The Eye or In The Shadows).
What puts this album in a supreme league of its own is a wickedly powerful aura that builds up throughout the album, which is something that no amount of musica training can achieve, and no review can adequately reflect. Reviewer ''stevex3'' gives us a taste when he says ''I''m sure that this CD gets played at every gathering of demons, but you really cannot have any idea what that means unless you experience this album for yourself (preferably played loud in the dark), as different people will experience it differently, and will undoubtedly have a hard time explaining their experience.', 1982, N'https://images-na.ssl-images-amazon.com/images/I/415gmX9ujaL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0011ZVVJ2/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0011ZVVJ2&linkCode=as2&tag=westwindtechn-20&linkId=GHOXSGQGTIORXIBC', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1730, 631, N'Melissa', N'Technically, Mercyful Fate''s debut LP is slightly patchy and derivative, particularly of early Black Sabbath and Judas Priest, although in parts it is more ambitious than those bands'' major works, in a `proggy'' kind of way. It also sounds a bit dated in parts. In terms of originality, craftsmanship, instrumental prowess, and King Diamond''s application of his unique and controversial voice and vocal range, it was comprehensively surpassed by Diamond''s later solo classics (particularly Them, Conspiracy, and The Eye), and even by Mercyful Fate''s 1993 reunion album, In The Shadows (although I prefer the more dynamic rhythm section on Melissa than those on The Eye or In The Shadows).
What puts this album in a supreme league of its own is a wickedly powerful aura that builds up throughout the album, which is something that no amount of musica training can achieve, and no review can adequately reflect. Reviewer ''stevex3'' gives us a taste when he says ''I''m sure that this CD gets played at every gathering of demons, but you really cannot have any idea what that means unless you experience this album for yourself (preferably played loud in the dark), as different people will experience it differently, and will undoubtedly have a hard time explaining their experience.', 1982, N'https://images-na.ssl-images-amazon.com/images/I/415gmX9ujaL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0011ZVVJ2/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0011ZVVJ2&linkCode=as2&tag=westwindtechn-20&linkId=GHOXSGQGTIORXIBC', N'')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1732, 1708, N'Guilty', N'Old school hardcore with mixed in metal roots, kicked out in good old garage style. Garage recorded by ex-Attitude Adjustment members Rick Strahl and Chris Kontos this short EP features toe tapping rythms and catchy choruses with high intensity, in-your-face punk rock that brings back memories of the mid-80''s punk and cross over scene.', 2003, N'http://americanparanoia.com/guilty_big.gif', NULL, N'http://americanparanoia.com')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1733, 329, N'Saint Cecilia EP', N'Released as a free EP, this record provides a nice 5 song cross-section of the typical styles that the Foo Fighters are great at. 5 songs that nail the mark in their particular Foo genres.', 2015, N'https://images-na.ssl-images-amazon.com/images/I/41ui4EZlPRL._SL250_.jpg', N'http://www.amazon.com/gp/product/B0186SDOP0/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0186SDOP0&linkCode=as2&tag=westwindtechn-20&linkId=J63NS2LRBDCQUUEQ', N'https://play.spotify.com/album/6wGcuJq8QjSeoYMJWgW7Wo')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1734, 329, N'Wasting Light', N'Hard to say that this is "the best" Foo Fighters album because, after so many years, bands should really be defined by eras. I would consider the Foos first era ending, and second era beginning, with their double album, In Your Honor. Their "classic" album from that first era is The Colour and The Shape. It is considered, and will continue to be considered, a classic album in the rock genre.

Wasting Light is the best album of the Foos second era and, like TCATS, it will be considered a classic album in the rock genre. There is no track that is unlikeable, just a few that aren''t as great as the others.

Highlights of the album are the first two tracks, "Bridge Burning" and "Rope", are the best two songs I''ve heard to open an album since way back to the first tracks of "Vs." by Pearl Jam, "Go" and "Animal." "Dear Rosemary" is solid, the guitar work sounding a bit like "Steady As She Goes" by the Racounteurs, and a chorus that is all Dave Grohl, even with help from Bob Mould.

Thrashy and well-placed "White Limo" is juxtaposed with the ridiculously catchy "Arlandria" ("you and what army? Arlandria!"). "These Days" is such a great, soaring rock song that it is easy to forget that the lyrics are painfully honest and relate-able on a number of levels. "Back and Forth" is cheesy, but in a catchy, good way, and sounds like something of a homage to any number of late-80''s rock tracks with it''s chug-chug-chug guitar sound (listen to it, you''ll get it).', 2011, N'https://images-na.ssl-images-amazon.com/images/I/51GNI3gwqDL._SL250_.jpg', N'http://www.amazon.com/gp/product/B004UXXVQS/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B004UXXVQS&linkCode=as2&tag=westwindtechn-20&linkId=QBDUHMATLFROQPZQ', N'https://play.spotify.com/album/5lnQLEUiVDkLbFJHXHQu9m')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1735, 1709, N'Probot', N'Probot is Dave Grohl''s project to work with some of Metal''s most notorious artists from the 1980''s Metal and Punk scene into a compilation album. Bringing characters like Chronos, Lemmy, Tom Warrior, Mike Dean, Snake and Kurt Brecht reads like a list of the music I was listening to in those days myself. The result album that brings these old school artists and combines it with Dave Grohl''s unique sound is perhaps different than you might expect, but it''s very eclectic and very varying in sound and style. There''s some truly awesome stuff in there but it is not the kind of stuff you toe tap your way through especially not on the first few listens. Enjoy the history and the complexity exhibited here.', 2004, N'https://images-na.ssl-images-amazon.com/images/I/61aGa9FvJYL._SL250_.jpg', N'http://www.amazon.com/gp/product/B014UDT9PY/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B014UDT9PY&linkCode=as2&tag=westwindtechn-20&linkId=3AR5RVPTI766PNFM', N'https://play.spotify.com/artist/3up7wqUGMUTm0184V57RTH')
GO
INSERT [dbo].[Albums] ([Id], [ArtistId], [Title], [Description], [Year], [ImageUrl], [AmazonUrl], [SpotifyUrl]) VALUES (1736, 1710, N'Chemistry of Conciousness', N'This album hurts. Crushed underneath and Anvil doesn''t even start to describe it. Raw, mean, angry it tears and rips. The raunchy but catchy riffs, the rasping voice, it all just works to create the sound of rage.This is what old school Crossover Hardcore is supposed to be about .', 2015, N'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00G2SO3AW&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=westwindtechn-20', N'http://amzn.to/1syvTSy', N'https://play.spotify.com/album/0jwJZDxGMm3SSm6LULhxgv')
GO
SET IDENTITY_INSERT [dbo].[Albums] OFF
GO
SET IDENTITY_INSERT [dbo].[Artists] ON 

GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1, N'AC/DC', N'AC/DC''s mammoth power chord roar became one of the most influential hard rock sounds of the ''70s. In its own way, it was a reaction against the pompous art rock and lumbering arena rock of the early ''70s. AC/DC''s rock was minimalist -- no matter how huge and bludgeoning their guitar chords were, there was a clear sense of space and restraint. Combined with Bon Scott''s larynx-shredding vocals, the band spawned countless imitators over the next two decades and enjoyed commercial success well into the 2000s.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0003/090/MI0003090436.jpg?partner=allrovi.com', N'http://www.amazon.com/AC-DC/e/B000AQU2YI/?_encoding=UTF8&camp=1789&creative=390957&linkCode=ur2&qid=1412245004&sr=8-1&tag=westwindtechn-20&linkId=SSZOE52V3EG4M4SW')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (2, N'Accept', N'With their brutal, simple riffs and aggressive, fast tempos, Accept were one of the top metal bands of the early ''80s, and a major influence on the development of thrash. Led by the unique vocal stylings of screeching banshee Udo Dirkschneider, the band forged an instantly recognizable sound and was notorious as one of the decade''s fiercest live acts. Despite recording two of the best heavy metal albums of the decade in Restless & Wild and Balls to the Wall, Accept remained too heavy and extreme for American audiences to embrace -- even when they tried to tone down their act with more melodic songs. Ultimately having conquered the rest of the world, but with their career stalled in the U.S., Accept fell apart, but reunited years later to confront a radically changed music marketplace.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0001/389/MI0001389322.jpg?partner=allrovi.com', N'http://www.amazon.com/Accept/e/B000APZ8S4/?_encoding=UTF8&camp=1789&creative=390957&linkCode=ur2&qid=1412245037&sr=8-3&tag=westwindtechn-20&linkId=KM4RZR3ECUXWBJ6E')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (3, N'Aerosmith', N'Aerosmith is an American rock band, sometimes referred to as "the Bad Boys from Boston" and "America''s Greatest Rock and Roll Band." Their style, which is rooted in blues-based hard rock, has come to also incorporate elements of pop, heavy metal, and rhythm and blues,and has inspired many subsequent rock artists. The band was formed in Boston, Massachusetts in 1970. Guitarist Joe Perry and bassist Tom Hamilton, originally in a band together called the Jam Band, met up with vocalist/harmonica player Steven Tyler, drummer Joey Kramer, and guitarist Ray Tabano, and formed Aerosmith. In 1971, Tabano was replaced by Brad Whitford, and the band began developing a following in Boston.

They were signed to Columbia Records in 1972, and released a string of gold and platinum albums, beginning with their 1973 eponymous debut album, followed by their 1974 album Get Your Wings. In 1975, the band broke into the mainstream with the album Toys in the Attic, and their 1976 follow-up Rocks cemented their status as hard rock superstars. Two additional albums followed in 1977 and 1979. The band''s first five albums have since attained multi-platinum status. Throughout the 1970s, the band toured extensively and charted a dozen Hot 100 singles. By the end of the decade, they were among the most popular hard rock bands in the world and developed a loyal following of fans, often referred to as the "Blue Army". However, drug addiction and internal conflict took their toll on the band, which resulted in the departures of Perry and Whitford in 1979 and 1981, respectively; they were replaced by Jimmy Crespo and Rick Dufay. The band did not fare well between 1980 and 1984, releasing the album Rock in a Hard Place, which went gold but failed to match their previous successes.

Perry and Whitford returned in 1984 and the band signed a new deal with Geffen Records. After a comeback tour, the band recorded Done with Mirrors (1985), which won some critical praise but failed to come close to commercial expectations. It was not until the band''s collaboration with rap group Run–D.M.C. in 1986, and the 1987 multi-platinum release Permanent Vacation, that they regained the level of popularity they had experienced in the 1970s. In the late 1980s and 1990s, the band scored several hits and won numerous awards for music from the multi-platinum albums Pump (1989), Get a Grip (1993), and Nine Lives (1997), and embarked on their most extensive concert tours to date. The band also became a pop culture phenomenon with popular music videos and notable appearances in television, film, and video games. Their comeback has been described as one of the most remarkable and spectacular in rock ''n'' roll history. Additional albums followed in 2001, 2004, and 2012. Since 2001, the band has toured every year except 2008. After 44 years of performing, the band continues to tour and record music.

Aerosmith is the best-selling American rock band of all time, having sold more than 150 million records worldwide, including over 70 million albums in the United States alone. With 25 gold albums, 18 platinum albums, and 12 multi-platinum albums, they hold the record for the most gold albums by an American group, the most total certifications by an American group, and are tied for the most multi-platinum albums by an American group. The band has scored 21 Top 40 hits on the Billboard Hot 100, nine number-one Mainstream Rock hits, four Grammy Awards, six American Music Awards, and ten MTV Video Music Awards. They were inducted into the Rock and Roll Hall of Fame in 2001, and were included among both Rolling Stone''s and VH1''s lists of the 100 Greatest Artists of All Time. In 2013, the band''s principal songwriters, Tyler and Perry, were inducted into the Songwriters Hall of Fame.', N'http://images6.fanpop.com/image/photos/33400000/Aero-wallpaper-aerosmith-33404894-1600-1200.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (4, N'Saxon', N'Saxon was one of the early leaders of the New Wave of British Heavy Metal, alongside Iron Maiden and Def Leppard, even outdistancing them at the onset, only to see their career slide into comparative obscurity within a few years, due to a series of bad decisions and bad breaks. Internal strife also severely stunted the band''s momentum toward the end of the ''80s, yet Saxon somehow persevered, recording and performing consistently into the 21st century, and ultimately attaining a semblance of second-tier respectability from the loyal heavy metal community, particularly in mainland Europe.', N'http://2fast2die.com/wp-content/uploads/2011/11/Saxon-vintage-BW.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (5, N'Alice In Chains', N'Alice in Chains is an American rock band formed in Seattle, Washington, in 1987 by guitarist and songwriter Jerry Cantrell and original lead vocalist Layne Staley. The initial lineup was rounded out by drummer Sean Kinney and bassist Mike Starr, who was replaced in 1993 by Mike Inez.

Although widely associated with grunge music, the band''s sound incorporates heavy metal and acoustic elements. Since its formation, Alice in Chains has released five studio albums, three EPs, two live albums, four compilations, and two DVDs. The band is known for its distinctive vocal style, which often included the harmonized vocals of Staley and Cantrell.

Alice in Chains rose to international fame as part of the grunge movement of the early 1990s, along with other Seattle bands such as Nirvana, Pearl Jam, and Soundgarden. The band was one of the most successful music acts of the 1990s, selling over 20 million albums worldwide,[1] and over 14 million in the US alone.[2] In 1992, the band released their album Dirt, which was critically acclaimed and has been certified quadruple platinum. The band also achieved two No. 1 Billboard 200 releases, 14 top ten songs on the Mainstream Rock Tracks chart, and nine Grammy Award nominations.

Although never officially disbanding, Alice in Chains was plagued by extended inactivity from 1996 onwards due to Staley''s substance abuse, which resulted in his death in 2002. The band reunited in 2005 with new lead vocalist William DuVall and released their fourth studio album, Black Gives Way to Blue, in 2009. The album was a success, receiving gold certification by the RIAA in 2010. Alice in Chains released their fifth studio album, The Devil Put Dinosaurs Here, on May 28, 2013,[3] and are currently on tour for this album.[4]', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqb0jamvCv00Qkly7NJluK9QgaPJqgjLUMIwcWKlhdrjlHofVQbw', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (6, N'Holocaust', N'Hailing from Edinburgh, Scotland, Holocaust were formed in the late ''70s, and featured vocalist Gary Lettice, guitarists John Mortimer and Ed Dudley, bassist Robin Begg, and drummer Nicky Arkless. Like many New Wave of British Heavy Metal bands, Holocaust cut their teeth in local clubs during the waning days of punk, before finally scoring an independent record deal and issuing 1981''s seminal The Nightcomers. Though commercially unsuccessful, the album has remained a favorite of the genre and was later cited as a major influence by members of Metallica, who covered the song "The Small Hours" from the band''s subsequent release, 1983''s Live -- Hot Curry and Wine. But the band was already experiencing internal strife and fell apart before the recording of 1984''s disjointed No Man''s Land, which featured sole surviving original member John Mortimer handling vocals, guitars, and bass, and backed by drummer Steve Cowen. Five years would pass before the duo (along with bassist David Rosie) resurrected Holocaust once again, going on to release a number of solid efforts, including 1989''s The Sound of Souls, 1992''s Hypnosis of Birds, 1996''s Spirits Fly, and 1997''s Covenant. 2003 saw the band''s work collected on the anthology Smokin Valves', N'http://www.hrrecords.de/high_roller/pix/releases/68_holocaustinsidethepowercagedlp_bg.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (7, N'Attitude', N'Attitude was founded by members from Attitude Adjustment including Andy Anderson, Chris Scapparo and Rick Strahl and joined by Keith Chattam of Condemned after a short stint as Condemned Attitude. Attitude play heavy cross-over punk/metal that was a favorite in the San Francisco Bay area but sadly never reach much visibility outside of it due to a lack of touring. 

The band produced three EPs that were well received by critics but didn''t manage to ignite a more mainstream following. The band''s heavy cross over style and energetic stage show made for exciting shows around the Bay Area as well as on their one and only European tour. The band didn''t last very long and in 1988 dissolved to form a new band Two Bit Thief which had a more rock''n roll leaning sound.', N'http://west-wind.com/rick/photoalbum/band/ruthiesjumpwithandy.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (8, N'Audioslave', N'When Zack de la Rocha left Rage Against the Machine in October 2000, the band''s future was put into question. Within months rumors flew that ex-Soundgarden frontman Chris Cornell would replace de la Rocha. And gossip fueled truth, for Cornell joined the rest of Rage in the studio in May 2001. The mix was great and a musical bond was in the making: Cornell, Tim Commerford, Brad Wilk, and Tom Morello spent the next year writing and recording. By spring 2002, the foursome were no longer going by the Rage Against the Machine name and signed on for Ozzfest. But before the summer tour even got underway, Cornell quit the new project. 
He claimed it wasn''t moving forward in the direction he''d hoped for. The breakdown didn''t last, for Cornell rejoined by early fall. After tossing around the idea of being called Civilian, they settled on Audioslave. The single "Cochise," named for the great American Indian chief who died free and unconquered, hit radio in September 2002, and Audioslave''s Epic full-length debut was released that November. The self-titled album eventually went multi-platinum on the strength of "Cochise" and the moody rocker "Like a Stone," and Audioslave supported it with gigs that included 2003 Lollapalooza dates. Cornell, Morello, Wilk, and Commerford returned in May 2005 with Out of Exile, which debuted at number one on Billboard. That same month they played an historic show in Havana, Cuba, that marked that country''s first outdoor show by an American rock band (that fall releasing the whole shebang on the Live in Cuba DVD). Exile continued the band''s platinum-selling ways -- singles like "Be Yourself" and "Doesn''t Remind Me" went to the top of the charts -- and the guys wasted no time following up with album number three, Revelations, in early September 2006. Work on the album took only five weeks, since most of the songs had been fleshed out live over the previous year. In 2007, shortly after the members of Rage announced that they would reunite for that year''s Coachella festival, Cornell left Audioslave, citing both personal and musical differences, and leaving the state of Audioslave uncertain.', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQHF8XC3aoteCNFsD8de438XX6WVg0xoULNctz0Wj-fOJv-YR', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (9, N'Trust', N'Not only was Trust one of the few French bands able to cross their country''s frontiers, but they also made it without having to drop their native language or their half-punk, half-heavy metal ethics along the way. And that''s saying something. Formed in 1977 around Bernard "Bernie" Bonvoisin (vocals), Nobert "Nono" Krief (guitars), Yves "Vivi" Brusco (bass), and an ever-changing set of drummers (including Iron Maiden''s Clive Burr and Nicko McBrain), the band came up up a mix of influences, the most obvious of which might be AC/DC (with whom they toured a bit) and early Iron Maiden. But if Trust was musically a shiny killing machine (thanks, mainly, to Nono''s guitar playing abilities and firepower), a large part of their appeal came from Bernie''s energy and socially concerned lyrics, which earned them occasional censorship. If their most famous hit remains "Antisocial" (covered in 1988 by New York thrashers Anthrax on their State of Euphoria LP), the early days Trust actually came up with a whole bunch of molotov cocktails. It was all about fingerpointing the greedy boss, the abusive policeman, the broadcasted lesson-giver, the hypocrisy-driven religious man, and singing for the weak, the poor, the abused. That may have been the key to their success, but it was sincere. The ''80s quickly saw their popularity drop after the heights of 1979''s eponymous album, 1980''s Repression, and 1981''s Marche ou Crève. Nono went on to became Johnny Hallyday''s stage guitarist, and Bernie became a comedian and director (1997''s Les Démons de Jésus being his most striking, cruelly funny effort). The band re-formed from time to time, to tour a little, release new tracks, and/or live albums. (Note: some of their LPs are available with English-sung lyrics, including 1980''s classic Repression).', N'http://cps-static.rovicorp.com/3/JPG_400/MI0003/749/MI0003749440.jpg?partner=allrovi.com', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (12, N'Black Sabbath', N'Black Sabbath have been so influential in the development of heavy metal rock music as to be a defining force in the style. The group took the blues-rock sound of late-''60s acts like Cream, Blue Cheer, and Vanilla Fudge to its logical conclusion, slowing the tempo, accentuating the bass, and emphasizing screaming guitar solos and howled vocals full of lyrics expressing mental anguish and macabre fantasies. If their predecessors clearly came out of an electrified blues tradition, Black Sabbath took that tradition in a new direction, and in so doing helped give birth to a musical style that continued to attract millions of fans decades later.

The group was formed by four teenage friends from Aston, near Birmingham, England: Anthony "Tony" Iommi (b. Feb 19, 1948), guitar; William "Bill" Ward (b. May 5, 1948), drums; John "Ozzy" Osbourne (b. December 3, 1948), vocals; and Terence "Geezer" Butler (b. July 17, 1949), bass. They originally called their jazz-blues band Polka Tulk, later renaming themselves Earth, and they played extensively in Europe. In early 1969, they decided to change their name again when they found that they were being mistaken for another group called Earth. Butler had written a song that took its title from a film directed by Mario Bava, Black Sabbath, and the group adopted it as their name as well. As they attracted attention for their live performances, record labels showed interest, and they were signed to Philips Records in 1969. In January 1970, the Philips subsidiary Fontana released their debut single, "Evil Woman (Don''t Play Your Games with Me)," a cover of a song that had just become a U.S. hit for Crow; it did not chart. The following month, a different Philips subsidiary, Vertigo, released Black Sabbath''s self-titled debut album, which reached the U.K. Top Ten. Though it was a less immediate success in the U.S. -- where the band''s recordings were licensed to Warner Bros. Records and appeared in May 1970 -- the LP broke into the American charts in August, reaching the Top 40, remaining in the charts over a year, and selling a million copies.', N'http://wac.450f.edgecastcdn.net/80450F/loudwire.com/files/2013/07/Black-Sabbath2.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (50, N'Metallica', N'Metallica were easily the best, most influential heavy metal band of the ''80s and ''90s. Responsible for bringing the genre back to Earth, the bandmates looked and talked like they were from the street, shunning the usual rock star games of metal musicians during the mid-''80s pop-metal renaissance. Metallica also expanded the limits of thrash, using speed and volume not for their own sake, but to enhance their intricately structured compositions. The release of 1983''s Kill ''Em All marked the beginning of the legitimization of heavy metal''s underground, bringing new complexity and depth to thrash metal. With each album, the band''s playing and writing improved; James Hetfield developed a signature rhythm playing that matched his growl, while lead guitarist Kirk Hammett became one of the most copied guitarists in metal. To complete the package, Lars Ulrich''s thunderous (yet complex) drumming clicked in perfectly with Cliff Burton''s innovative bass playing.', N'http://wac.450f.edgecastcdn.net/80450F/loudwire.com/files/2012/02/Metallica_Cliff-Burton.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (90, N'Iron Maiden', N'Known for such powerful hits as "Two Minutes to Midnight" and "The Trooper," Iron Maiden were and are one of the most influential bands of the heavy metal genre. The often-imitated band has existed for over nearly four decades, pumping out wild rock similar to Judas Priest. Iron Maiden have always been an underground attraction; although failing to ever obtain any real media attention in the U.S. (critics claimed them to be Satanists due to their dark musical themes and their use of grim mascot "Eddie"), they still became well-known throughout the world and have remained consistently popular throughout their career. Iron Maiden were one of the first groups to be classified as "British metal," and, along with Black Sabbath, Led Zeppelin, and a host of other bands, set the rock scene for the ''80s.

Iron Maiden were first formed in 1976 by bassist Steve Harris, who would soon join up with rhythm guitarist Tony Parsons, drummer Doug Sampson, and vocalist Paul Di''Anno. Before finally obtaining a record deal, the group played in local areas throughout the ''70s, receiving a fair amount of London airplay. Parsons replaced Dennis Stratton, and the band made its record debut in 1980 with the self-titled Iron Maiden album. Although the release was recorded in a hurry, it was nonetheless a hit in the U.K. due to the single "Running Free." Iron Maiden''s 1981 follow-up, Killers, displayed a harder approach to their music than before, and also saw the replacement of Stratton with Adrian Smith. Due to his uncontrollable alcohol addiction, Di''Anno was forced to part company with the group and would soon be replaced with vocalist Bruce Dickinson in 1982 for the band''s groundbreaking Number of the Beast. This album, boasting such songs as the title track and "Hallowed Be Thy Name," would come to be known as one of the greatest rock recordings of all time. Since the unexpected worldwide success of Beast made Iron Maiden international rock superstars, they changed very little of their style for their next album, Piece of Mind. They undertook two major tours before recording 1983''s Powerslave, which would go on to be another cult hit. The product of Powerslave''s 11-month tour was 1985''s Live After Death, a double live album that featured all of their biggest hit singles.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0003/507/MI0003507317.jpg?partner=allrovi.com', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (327, N'Condemned?', N'Born-again crossover agents Condemned joined a long list of unlikely reunions mitigated by the Nuclear Blast label with 2011''s Condemned 2 Death CD, their first release in almost two decades! You see, once upon a time in the mid-''80s, the San Francisco natives figured alongside D.R.I., the Dicks, M.D.C., and other fledgling groups in the now legendary Vat''s scene, so there''s no questioning Condemned''s credentials -- just the wisdom of their return, should it go pear-shaped. Yet, by and large, those worries evaporate just as soon as Condemned 2 Death gets underway, launched by a Motörhead-like bassline from band lynchpin Keith Chatham on "Big Time Game Hunting," which paves the way for a rarely surprising but consistently engaging and oftentimes euphoric collection of timeless hardcore anthems. Purists looking to simply pump their fists and shout along need look no further than infectious calls-to-arms like "Aggressive System" and "Anti-Social"; crossover fans looking to satisfy their metallic speed-riffing kinks can dive into "Thoughts of Equality" and "Emotional Blurr"; attention-deficit-disorder listeners will get just what they crave in sub-minute blasts like "Practicing for War" and "D-Day"; then everyone can catch their breath during slower numbers like "Thoughts of Equality," "Crucified," and "Cleansing Pool." The lyrics, like the music, also stick with the classic hardcore program (socio-political messages, railing against the system, etc.), harking back to simpler times and familiar hallmarks rather than experimenting with new millennium chicanery. But one feels this is ultimately for the better, and the authentic results show Condemned validating their belated comeback by remembering where they come from, and their fans surely wouldn''t want it any other way.', N'http://www.metalforcesmagazine.com/site/wp-content/uploads/2011/06/condemned2011rickstrahlpromo.jpg', NULL)
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (328, N'Corrosion of Conformity', N'One of the first punk-metal fusion bands, Corrosion of Conformity were formed in North Carolina by guitarist Woody Weatherman during the early ''80s. In their early years, C.O.C. became known for their aggressive sound, intelligent political lyrics, and willingness to break away from both hardcore and metal conventions. In the ''90s, their shift to a more stripped-down, deliberate sound -- sort of Black Sabbath filtered through the Deep South -- brought them enough in line with the alt metal Zeitgeist to bring them a measure of mainstream popularity. Then recently they turned back to their hardcore roots with ther 2012 and 2014 releases that mixes the raw', N'http://theobelisk.net/obelisk/wp-content/uploads/2012/01/coc.jpg', N'http://theobelisk.net/obelisk/wp-content/uploads/2012/01/coc.jpg')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (329, N'Foo Fighters', N'The Foo Fighters is an American rock band, formed in Seattle in 1994. It was founded by Nirvana drummer Dave Grohl as a one-man project following the death of Kurt Cobain and the resulting dissolution of his previous band. The group got its name from the UFOs and various aerial phenomena that were reported by Allied aircraft pilots in World War II, which were known collectively as foo fighters. Prior to the release of Foo Fighters'' 1995 debut album Foo Fighters, which featured Grohl as the only official member, Grohl recruited bassist Nate Mendel and drummer William Goldsmith, both formerly of Sunny Day Real Estate, as well as fellow Nirvana touring bandmate Pat Smear as guitarist to complete the lineup. The band began with performances in Portland, Oregon. Goldsmith quit during the recording of the group''s second album, The Colour and the Shape (1997) when most of the drum parts were re-recorded by Grohl himself. Smear''s departure followed soon afterward.

They were replaced by Taylor Hawkins and Franz Stahl, respectively, although Stahl was fired before the recording of the group''s third album, There Is Nothing Left to Lose (1999). The band briefly continued as a trio until Chris Shiflett joined as the band''s lead guitarist after the completion of There Is Nothing Left to Lose. The band released its fourth album, One by One, in 2002. The group followed that release with the two-disc In Your Honor (2005), which was split between acoustic songs and heavier material. Foo Fighters released its sixth album, Echoes, Silence, Patience & Grace, in 2007. In 2010, it was confirmed that Smear had officially rejoined the band after touring with Foo Fighters as an unofficial member between 2006 and 2009. Over the course of the band''s career, four of its albums have won Grammy Awards for Best Rock Album. The band''s seventh studio album, Wasting Light, produced by Butch Vig was released in 2011. The band''s eight studio album, Sonic Highways, and their second recorded with Butch Vig, will be released in November 2014.[5] As of May 2014, the band''s seven albums have sold a combined 11.1 million copies, according to Nielsen SoundScan.[6]', N'http://media.tumblr.com/tumblr_mb76f02FkJ1qfo293.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (330, N'Henry Rollins Band', N'Rollins Band was an American rock band led by singer and songwriter Henry Rollins.

They are best known for the songs "Low Self Opinion" and "Liar", which both earned heavy airplay on MTV in the mid-late 1990s. Critic Steve Huey describes their music as "uncompromising, intense, cathartic fusions of hard rock, funk, post-punk noise, and jazz experimentalism, with Rollins shouting angry, biting self-examinations and accusations over the grind.

The band have been categorized under the alternative metal, hard rock and post-hardcore genres.[8][9][10] They were part of the early 90s LA alternative metal scene, alongside bands such as Tool, Jane''s Addiction, Rage Against the Machine and Green Jellÿ.[10] Their influences include 70s metal and rock bands, such as Black Sabbath, The Velvet Underground, Pink Fairies and Thin Lizzy.[8] Rollins'' shout-singing style proved influential to later nu metal and alternative metal artists such as Coal Chamber, Korn, Chevelle, Godsmack and System of a Down.[8] Rollins Band have been covered by Pearl Jam.[11]', N'http://upload.wikimedia.org/wikipedia/commons/a/a1/Henry_Rollins_2.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (331, N'Motörhead (Sql)', N'Motörhead have never JUST been the best rock''n''roll band in the world. They''ve never JUST been the loudest. Or the hardest. Or the toughest. Or the bad-ass-est. No...Motörhead are also a lifestyle.', N'http://news.sagacom.com/wp-content/blogs.dir/3/files/2015/11/philtaylor.jpg', N'http://www.amazon.com/gp/product/B00005NHO2/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00005NHO2&linkCode=as2&tag=westwindtechn-20')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (332, N'Neurosis', N'Neurosis is a post-metal band, based in Oakland, California. They formed in 1985 as a hardcore punk band, and their sound progressed towards a doom metal style that also included influences from dark ambient and industrial music as well as incorporating elements of folk music. Terrorizer Magazine described Neurosis as "arguably the most influential band of the past two decades."[1]', N'http://www.earsplitcompound.com/site/wp-content/uploads/2013/09/neurosis_angelaowens-9-e1378737031742.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (333, N'Prong', N'', N'', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (334, N'Soundgarden', N'Soundgarden is an American rock band formed in Seattle, Washington, in 1984 by singer and rhythm guitarist Chris Cornell, lead guitarist Kim Thayil, and bassist Hiro Yamamoto. Matt Cameron became the band''s full-time drummer in 1986, while bassist Ben Shepherd became a permanent replacement for Yamamoto in 1990.

Soundgarden was one of the seminal bands in the creation of grunge, a style of alternative rock that developed in Seattle, and was one of a number of grunge bands signed to the record label Sub Pop. Soundgarden was the first grunge band to sign to a major label (A&M Records, in 1988), though the band did not achieve commercial success until they popularized the genre in the early 1990s with Seattle contemporaries Pearl Jam, Nirvana, and Alice in Chains.

Soundgarden achieved its biggest success with the 1994 album Superunknown, which debuted at number one on the Billboard charts and yielded the Grammy Award-winning singles "Black Hole Sun" and "Spoonman". In 1997, the band broke up due to internal strife over its creative direction. After several years working on projects and other bands, Soundgarden reunited in 2010 and their sixth studio album, King Animal, was released two years later.[1]

As of 2012, Soundgarden had sold more than 10.5 million records in the United States,[2] and an estimated 22.5 million worldwide.', N'http://cdn.mos.musicradar.com/images/artist-news/chris-cornell/soundgarden-corbis-630-80.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (335, N'Tool', N'Tool''s greatest breakthrough was to meld dark underground metal with the ambition of art rock. Although Metallica wrote their multi-sectioned, layered songs as if they were composers, they kept their musical attack ferociously at street level. Tool didn''t. They embraced the artsy, bohemian preoccupations of Jane''s Addiction while they simultaneously paid musical homage to the relentlessly bleak visions of grindcore, death metal, and thrash. Even with their post-punk influences, they executed their music with the aesthetic of prog rock, alternating between long, detailed instrumental interludes and lyrical rants in their songs.

UndertowTool had a knack for conveying the strangled, oppressive angst that the alternative nation of the early ''90s claimed as its own. So, Tool were able to slip into the definition of alternative rock during the post-Nirvana era, landing a slot on the third Lollapalooza tour in 1993, which helped their first full-length debut album, Undertow, rocket to platinum status. By the time the band delivered its belated follow-up, Ænima, in 1996, alternative rock had lost its grip on the mainstream of America, and Tool''s audience had shaped up as essentially metal-oriented, which meant that the group and the record didn''t capture as big an audience as their first album, despite debuting at number two on the charts. After a co-headlining slot with Korn on Lollapalooza ''97 wrapped up, Tool remained on the road, supporting Ænima until well into the next year.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0003/371/MI0003371431.jpg?partner=allrovi.com', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (336, N'UK Subs', N'
As part of the original punk rock movement in England during the mid-''70s, the U.K. Subs scored several hit singles in their homeland, switching between politically charged material and party-hearty rockers. Led by singer Charlie Harper (who previously fronted a R&B outfit called the Marauders), the U.K. Subs formed in November of 1976, after Harper discovered the Damned. Originally called the Subversives before shortening their name, Harper recruited guitarist Nicky Garratt, bassist Steve Slack, and a revolving door of drummers (eventually finding a semi-permanent member with Pete Davis), and soon after began plotting their plan of attack from Harper''s place of business, a hairdressing salon in South London. Around this time, the up-and-coming group recorded a live set at the infamous punk club the Roxy (just prior to its closing), with hopes of the recording being issued as their debut album. Although the recording did indeed go down, the tapes sat on a shelf for several years, before eventually being issued in 1980 under the title of Live Kicks. This led to several John Peel sessions on BBC Radio One in 1977 and 1978, and eventually, a recording contract with the GEM record label, and what''s often considered to be their finest recording, their 1979 full-length debut, Another Kind of Blues.

The group enjoyed success back home straight off the bat, as they had several moderate hit singles ("Stranglehold," "Tomorrow''s Girls"), appeared at the mammoth Glastonbury Festival, landed a cover story for Sounds magazine, and were even the subject of a Julien Temple-directed film documentary, entitled Punk Can Take It. 

1980 saw the U.K. Subs attempt to crack the U.S. market, with a few opening gigs for the Police, as a pair of studio albums were issued, Brand New Age and Crash Course. But as the public''s interest began to shift from punk to new wave/synth pop in the early ''80s, the U.K. Subs saw their popularity quickly begin to dwindle, as bandmembers began to come and go. The band continued on with such further releases as 1981''s Diminished Responsibility and 1982''s Endangered Species (among others), as the group''s sound grew more and more a kin to hard rock/heavy metal. But despite almost all of the original U.K. punk groups going their separate ways by the early to mid-''80s (the Sex Pistols, the Clash, the Damned, etc.), the U.K. Subs never split up; although Harper was often the only original member left in attendance, the group continued to issue albums and never ceased playing shows. ''80s-era bassist Alvin Gibbs would go on to briefly play bass for punk godfather Iggy Pop in 1988, and even penned a book about his experiences, Neighbourhood Threat: On Tour With Iggy Pop. The ''90s saw the release of countless U.K. Subs "hits" collections, the best of the bunch being 1991''s Singles 1978-1982 and 1996''s The Punk Singles Collection.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0002/749/MI0002749249.jpg?partner=allrovi.com
', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (340, N'Die Toten Hosen', N'Noted for their irreverent style and tough but hooky tunes, German punk/metal band Die Toten Hosen are one of Germany''s most successful rock bands, still commanding a large and loyal following at home and in Australia, South America, and Japan more than three decades after they began. Die Toten Hosen (the name literally translates as "the Dead Trousers") was formed in 1982 from the ashes of two Düsseldorf punk bands, ZK and KFC. Considering that three members of the Hosen were named Andreas, they took stage names to avoid confusion: vocalist Campino (b. Andreas Frege; June 22, 1962), guitarist Breiti (b. Andreas Breitkopf; Feb. 6, 1964), rhythm guitarist Kuddel (b. Andreas Von Holst; June 11, 1964), bassist Andi (b. Andreas Meurer; July 24, 1962), and drummer Trini (b. Klaus-Dieter Trimpop; June 10, 1951). Die Toten Hosen self-released their first album, Opel Gang, in 1983, and several months later, EMI signed the group and reissued the LP. EMI soon grew disenchanted with the band (particularly after they were sued by German pop icon Heino after they parodied him in concert), and Virgin released their next album, Unter Falscher Flagge, in 1984; the following year, Trini vacated the drum stool to become the group''s manager, and Wölli (b. Wolfgang Rohde; Jan. 9, 1963) took over on percussion. In 1986, the band released Damenwahl, which fared well on the charts and gave them their first taste of corporate sponsorship -- Fromms, a major condom manufacturer, helped promote the Damenwahl tour and provided samples of their products to hand out to fans. A live album followed, 1987''s Bis Zum Bitteren Ende, and the group finally moved from cult favorites to a real commercial force in Germany with 1988''s Ein Kleines Bisschen Horrorschau, which rose to number seven on the German charts.', N'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMFuwb2Z8fw2_U3oulFlr9YgGUotbr7gd7yl8MfD_01iS38IFO', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (342, N'The Bravery', N'The Bravery were an American dance-rock band formed in New York City in 2003 that consisted of lead vocalist Sam Endicott, guitarist Michael Zakarin, keyboardist John Conway, bassist Mike Hindert and drummer Anthony Burulcich.

They released three studio albums: The Bravery (2005), The Sun and the Moon (2007) and Stir the Blood (2009). They also released a remixed edition of their second album called The Sun and the Moon Complete in 2008 and an Internet live album called Live at the Wiltern Theater in 2010. Their music was a synthesis of post-punk revival and new wave.

The Bravery broke up in late 2011, which was not announced until April 2014, when Endicott revealed through The Bravery''s website and Facebook page, that all the members are taking part in separate avenues of creative interests and that, for now, there are no plans for The Bravery in the foreseeable future.', N'http://upload.wikimedia.org/wikipedia/commons/8/8a/Bravery1.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (343, N'Machine Head', N'Machine Head is an American metal band from Oakland, California.[2][3] Formed on October 12, 1991,[4] the group was founded by vocalist and guitarist Robb Flynn and bassist Adam Duce. The current lineup of the band comprises Flynn, drummer Dave McClain, guitarist Phil Demmel, and bassist Jared MacEachern. Machine Head is one of the pioneering bands in the New Wave of American Heavy Metal.[5][6]

Machine Head was formed by member Robb Flynn, previously part of the bands Forbidden and Vio-lence. Flynn felt musically unfulfilled with Vio-lence and requested to start a side project. When his request was denied, he left the band and formed Machine Head in 1991 with Adam Duce, Logan Mader and Tony Constanza. The band''s first album Burn My Eyes, was a big success in Europe where it garnered attention on MTV''s Headbangers Ball. In America (with HBB taken off the air during the grunge movement) Machine Head would not have success until later albums.

The band nearly disbanded in 2002 after negotiating off its label Roadrunner Records, when controversy surrounding Machine Head''s fourth album Supercharger (released 3 weeks after September 11, 2001) resulted in their songs and music video for the song "Crashing Around You" (which featured burning buildings) being pulled from all media outlets. The band re-signed with Roadrunner soon after and has released four albums since, 2003''s Through the Ashes of Empires, 2007''s The Blackening (which earned Machine Head its first Grammy Award nomination) and 2011''s Unto the Locust. Their most recent album, Bloodstone & Diamonds, was released in 2014. Machine Head have sold over 3 million records worldwide.[7]', N'http://fc09.deviantart.net/fs71/f/2011/158/0/9/machine_head_4_by_givethemhorns-d3iaaoz.jpg', N'http://wac.450f.edgecastcdn.net/80450F/noisecreep.com/files/2013/07/MAYHEMmachine1.jpg')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (345, N'Rage Against the Machine', N'Rage Against the Machine, commonly abbreviated as RATM, is an American rap metal band from Los Angeles, California. Formed in 1991, the group consists of rapper/vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello and drummer Brad Wilk. They draw inspiration from early heavy metal instrumentation, as well as hip hop acts such as Afrika Bambaataa,[1] Public Enemy, the Beastie Boys and Dutch crossover band Urban Dance Squad.[2] Rage Against the Machine is best known for its leftist political views, which are expressed in many of its songs. As of 2010, they have sold over 16 million records worldwide.[3]

In 1992, the band released its self-titled debut album, which became a commercial and critical success, leading to a slot in the 1993 Lollapalooza festival. In 2003, the album was ranked number 368 on Rolling Stone magazine''s list of the 500 greatest albums of all time. The band did not release a follow-up record until 1996, with Evil Empire. The band''s third album, The Battle of Los Angeles, followed in 1999, and in 2003, the album was ranked number 426 on the same list. During their initial nine-year run, they became one of the most popular and influential bands in music history, according to music journalist Colin Devenish.[4] They were also ranked No. 33 on VH1''s 100 Greatest Artists of Hard Rock. The band had a large influence on the nu metal genre which emerged during the late 1990s.

In 2000, the band released the cover album, Renegades. The same year, growing tensions over the direction of the band prompted de la Rocha to quit, leading to the band''s breakup. De la Rocha started a low-key solo career, while the rest of the band formed the rock supergroup Audioslave with Chris Cornell, then-former frontman of Soundgarden; Audioslave recorded three albums before disbanding in 2007. The same year, Rage Against the Machine announced a reunion and performed together for the first time in seven years at the Coachella Valley Music and Arts Festival in April 2007. Up until 2011, the band continued to perform at more live venues and festivals around the world. As of 2014, the group has no plans to record new material.[5]', N'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Rage_Against_The_Machine.jpg/1280px-Rage_Against_The_Machine.jpg', N'http://wac.450f.edgecastcdn.net/80450F/loudwire.com/files/2012/11/Rage-Against-the-Machine.jpg')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (346, N'Skindred', N'', N'', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (347, N'Raven', N'Raven were considered one of the brightest hopes in the New Wave of British Heavy Metal, but bad decisions and musical inconsistency would de-rail their once-promising career, turning the trio into just another small -- albeit important -- footnote for this important genre.

Raven formed in late 70''s Newcastle, England by brothers Mark (guitar) and John Gallagher (bass/vocals) along with drummer Rob "Wacko" Hunter. Signing with independent Neat Records, the trio joined labelmates Venom in laying the groundwork for what would become known as thrash metal by picking up where ''70s noisemongers Motorhead had left off. Not as satanically-inclined or downright silly as Venom, Raven were much better musicians and played with the raw energy and reckless power that epitomized the New Wave of British Heavy Metal. As the movement approached its peak in 1981, Raven rode its crest with the self-labeled "athletic rock" of their album, Rock Until You Drop, still considered a classic of the genre.

Subsequent Neat releases -- Wiped Out, All for One and Live at the Inferno -- weren''t quite as focused but helped the band solidify their fan-base and attract the attention of Atlantic Records. Unfortunately, signing with the major record company marked the turning point of Raven''s fortunes as 1985''s disappointing Stay Hard saw the band opting for an overtly commercial direction. Raven gradually relinquished their pop-metal aspirations, but by the time they attempted a full return to their roots with 1988''s Nothing Exceeds Like Excess, their momentum had been irretrievably lost, along with drummer Wacko. The group has continued to record throughout the ''90s on a variety of independent labels with new drummer Joey Hassewander, without anything close to mainstream success.', N'http://www.metalblade.com/us/photos/raven_photo02.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (348, N'Two Bit Thief', N'Two Bit Thief is a San Fransisco Bay Area band that originated from the base of a number of Bay Area Punk and Metal bands. Although the band has hard-core roots, this incarnation of members from Attitude Adjustment, Attitude, DRI and Condemned played more straight forward rock with a hard edge and stinging social street lyrics. The band had a unique style that wasn''t terribly original, but in its own way provided likable and authentic rock music. Two Bit''s shows were always entertaining as the band continued its frentic stage shows from the punk rock days.

The band produced 3 albums with varying line ups the first of which was Another Sad Story in the big city which is the most polished of the bunch. It''s mostly a straight forward rock affair that is a fun listen. Gangster Rebel Bop turns to a lighter more playful style that also is more bluesy and show-cases some fine song writing and guitar riffs for genuinely memorable songs. Unforutnately for the band the line-up changes and lack of label support resulted in this deserving band not getting much attention and sinking into obscurity.', N'http://userserve-ak.last.fm/serve/252/109540.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (349, N'Exodus', N'nce the kings of the Bay Area metal scene -- the birthplace of thrash -- Exodus were unceremoniously demoted from their post with the arrival of Los Angeles'' Metallica in 1982. And while they proceeded to eke out a hit-and-miss career of their own over the next few decades, all the while influencing at least two separate generations of younger thrash bands, Exodus were ultimately fated to be the ultimate also-rans of the genre they helped spawn.

Formed in 1981 by singer Paul Baloff, guitarists Gary Holt and Kirk Hammett, bassist Geoff Andrews, and drummer Tom Hunting, Exodus were heavily influenced by Motörhead and New Wave of British Heavy Metal bands like Iron Maiden and Raven, whose lessons they combined with the raw, D.I.Y. aesthetic of the prolific Bay Area punk scene to create thrash metal. Their handful of demos recorded between 1982-1984 became wildly popular on the all-important underground tape-trading circuit of the time, and solidified the band''s standing as the Bay Area''s first thrash champions. But they would soon lose their numero uno standing as well as their guitarist Hammett to the aforementioned Metallica, who then raced ahead of all competitors in their mission to bring thrash to the world. Wounded but undaunted, Exodus drafted guitarist Rick Hunolt and replaced bassist Andrews with Rob McKillop before signing with Torrid Records, for whom they recorded their Bonded by Blood debut in 1984. But the album languished unreleased for over a year due to business problems, and by the time it was finally unveiled by Combat Records in 1985, the would-be genre benchmark already sounded dated and its impact was severely dulled by the quick evolution of their peers.

These hardships also led to the ousting of vocalist Baloff, whose carefree, larger-than-life attitude (and often drunken behavior) made him an easy scapegoat for his more driven bandmates. His replacement was ex-Testament singer Steve "Zetro" Souza, who arrived in time for 1987''s disappointing Pleasures of the Flesh -- an inconsistent album which did nothing to advance Exodus'' cause. Incessant touring served to strengthen the band''s new lineup, though, and 1989''s meticulously conceived Fabulous Disaster was a critical triumph, bringing the group to their commercial peak. The successful world tour which followed brought another dramatic setback, however, when drummer Hunting was diagnosed with an irregular heartbeat which first sidelined, then forced him to quit the band at tour''s end. Still, Exodus was on a roll, and their momentum led to a new contract with Capitol Records, which immediately rushed them back into the studio with former Anthrax drum tech John Tempesta manning the skins, to lay down tracks for 1990''s Impact Is Imminent. But the absence of a competent producer and a carelessly assembled collection of songs resulted in a dull, forgettable album that was doomed to commercial failure from day one, squandering the group''s recent accomplishments and pretty much closing their window to success. Longtime bassist McKillop left soon after (replaced by Mike Butler) and despite the renewed quality of 1992''s Force of Habit (certainly their most diverse album ever), the members of Exodus decided to go their separate ways when the grunge revolution sidelined heavy metal bands of most any stripe.', N'', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (350, N'Danko Jones', N'Named after their bandleader, Danko Jones are a Canadian hard rock trio whose bluesy style is rooted in the tradition of Thin Lizzy and AC/DC and whose popularity in Western Europe compensates for their lack of recognition in the neighboring United States. Comprised of band namesake Danko Jones (vocals/guitar), John Calabrese (aka JC; bass guitar), and Dan Cornelius (drums), the band was founded in Toronto, Ontario, in 1996 and made its recording debut in 1998 with a five-track self-titled EP on Sonic Unyon. A follow-up EP on Sound King Records, My Love Is Bold (1999), garnered airplay on Canadian hard rock radio, setting the stage for I''m Alive and on Fire (2001), a 13-track compilation of the band''s recording output from 1996 to 1999.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0003/439/MI0003439735.jpg?partner=allrovi.com', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (351, N'Exploited', N'The Exploited is a Scottish punk rock band from the second wave of UK punk, formed in 1978. Originally a street punk band, The Exploited became a faster hardcore punk band with a heavy influence. Formed in Edinburgh by Stevie Ross and Terry Buchan, who were later joined by ex-soldier Walter ("Wattie") Buchan (Terry''s brother), they signed to Secret Records in March 1981 and released their debut EP Army Life. The album Punks Not Dead followed in the same year. Despite many lineup changes, "Wattie" Buchan has remained as the leader, and the band continued into the 2000s and developed a worldwide following. In 2012 the band started writing material for a new album.', N'http://userserve-ak.last.fm/serve/500/24413009/The+Exploited+x500380ff00e.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (352, N'GrunTruck', N'Gruntruck was an American rock band formed in 1989 in Seattle, Washington by Ben McMillan and Scott McCullum, both previously from Skin Yard. Tommy Niemeyer from The Accüsed and Tim Paul, previously of Final Warning, rounded out the initial, classic line-up. Their sound was described as grunge, and the band focused more on the metal side of the genre.', N'https://s3.amazonaws.com/assets.rr.roadrunnerrecords.com/photos/1090/large/lwf6.jpg?1327995552', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (353, N'Kyuss', N'', N'', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (354, N'Thrice', N'Thrice is an American rock band from Irvine, California, formed in 1998. The group was founded by guitarist/vocalist Dustin Kensrue and guitarist Teppei Teranishi while they were in high school.[1]

Early in their career, the band was known for fast, hard music based in heavily distorted guitars, prominent lead guitar lines, and frequent changes in complex time signatures.[2] This style is exemplified on their second album, The Illusion of Safety (2002) and their third album The Artist in the Ambulance (2003). Their fourth album Vheissu (2005) made significant changes by incorporating electronic beats, keyboards, and more experimental and nuanced songwriting.[3][4] Their fifth effort was a double album entitled The Alchemy Index (2007/2008), released as two sets of two CDs that together make a 4-part, 24-song cycle. Each of the four 6-song EPs of the Alchemy Index features significantly different styles, based on different aspects of the band''s musical aesthetic which reflect the elemental themes of fire, water, air and earth, both lyrically and musically.[5] The band''s sixth album, entitled Beggars, was released on August 11, 2009, and their seventh, Major/Minor on September 20, 2011. The most recent albums feature a refined combination of the band''s different experiments and explorations.', N'http://images.onset.freedom.com/ocregister/blogs/soundcheck.ocregister.com/thrice-hob_anaheim_ACY7764.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (356, N'Poison Idea', N'Poison Idea was formed in 1980 by vocalist Jerry A. (aka Jerry Lang). The initial lineup consisted of Jerry A., Chris Tense (guitar), Glen Estes (bass), and Dean Johnson (drums). Inspired by Black Flag and other early Southern California hardcore acts, they were further influenced by Discharge and Los Angeles''s the Germs. Germs singer Darby Crash''s influence on singer Jerry A., vocally, lyrically, and philosophically, was considerable, and Poison Idea followed the Germs’ extremist punk ethic. Tense, who previously had played with Jerry in a group called the Stand, was replaced within a year by Tom "Pig Champion" Roberts (guitar), formerly of the Imperialist Pigs.

Poison Idea’s debut, 1983''s Pick Your King EP was a short, lo-fi blast of hardcore fury. The jacket featured a "choice" of two kings, Jesus (front cover) and Elvis Presley (back cover).

In 1984, Chris Tense returned to the band, this time on bass, replacing Glen Estes (later of Portland, Oregon punk/metal band Final Warning), and the group released the Record Collectors Are Pretentious Assholes 12” (the cover features Pig Champion’s substantial vinyl collection). The record found the band incorporating subtle rock elements into their music, which was further honed on their contributions to two 1985 compilations, “Laughing Boy” on the Drinking is Great EP (on which appeared other Oregon punk bands Final Warning, Lockjaw and E-13), and “Typical” and “Die on Your Knees” on the legendary Cleanse the Bacteria LP (compiled by Pushead for his own Pusmort label).

With the release of 1986’s Kings of Punk LP, Poison Idea had fully moved beyond the breakneck hardcore of their early records to a potent, driving and ultimately more intricate and sophisticated hardcore/hard rock fusion that incorporated the accessibility of hard rock without sacrificing the power of hardcore.

Following the release of Kings of Punk, the band went through several rapid lineup changes (mostly in the rhythm section), and then added lead guitarist Eric "Vegetable" Olson, a gifted musician who wrote many PI tunes during his tenure in the band (even contributing a piano vamp on one track). The band then released War All the Time (named for the Charles Bukowski book) in 1987. War All the Time and the EPs that followed (the Getting the Fear 12" and the Filthkick 7") found them further developing the rock/hardcore sound first established on Kings of Punk, which they would hone in 1990 with Feel the Darkness.

Around this time, after numerous lineup changes, PI had convened one of their more stable lineups in Jerry A., Tom "Pig Champion" Roberts, Charley "Myrtle Tickner" Nims (bass) and Steve "Thee Slayer Hippy" Hanford (drums), with Kid Cocksman and then Aldine Strichnine on second guitar. By this time, their drinking habits and hard living were beginning to catch up with them: the band weighed in at about 1,300 lb. collectively, and Pig Champion in particular was very fat, often having to play sitting down. They also established their own record label in 1989, American Leather (named for the Germs song), and released two records the same year: a reissue of their 1982 demo Darby Crash Rides Again and the Discontent 7”.

In 1990, the band released Feel the Darkness. After the release of Feel the Darkness, Aldine Strychnine was thrown out of the band, and Mondo returned this time on guitar, for the 1991 tour. PI then released Blank Blackout Vacant in 1992, and, before seemingly splitting in 1993, they released We Must Burn.

When Pig Champion left the band in 1993, shortly before the recording and release of the live album on Your Choice Records produced by Tobby Holzinger, PI effectively called it quits. Jerry A pursued a solo project called Gift with his wife and Thee Slayer Hippy, and in 1998 the original line-up reunited for a 7" EP on released on Taang! (who reissued their early catalogue), but broke up following an aborted tour.

Reflex/Wolfpack Records also did two vinyl reissues of the band. First Kings of Punk in 2003. Then later in 2005 a compilation 12" containing the Pick Your King EP and the ''Learning To Scream'' EP.', N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wq3uOcHeJzwcucKu5PYLF7pNUrv5r06g34zee9SoKNgY6S64bA', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (357, N'Discharge', N'Discharge are a British hardcore punk band formed in 1977 by Terence "Tezz" Roberts and Royston "Rainy" Wainwright. While the band had substantial line-up changes over its history, the classic line-up from the early 1980s featured bassist Wainwright, drummer Roberts, his brother Anthony "Bones" Roberts playing guitar, and vocalist Kelvin "Cal" Morris.[1]

The band is characterized by a minimalistic approach of music and lyrics, a heavy, distorted, and grinding guitar-driven sound and raw, shouted vocals similar to a political speech, with lyrics on anarchist and pacifist themes. AllMusic calls the band''s sound a "high-speed noise overload" characterized by "ferocious noise blasts" [2] The band''s 1982 debut album, Hear Nothing See Nothing Say Nothing, went to number two on the UK Indie Charts and number 40 in the UK Album Chart. In the early 1980s, numerous singles and EPs placed in the top 10 of the UK Indie Charts, including the 1981 EP Why? (#1) and the 1982 single State Violence State Control.

Hear Nothing See Nothing Say Nothing paved the way for thrash metal, black metal, crust punk, grindcore and various extreme metal subgenres. The musical genre of d-beat is named after Discharge and their distinctive drumbeat.', N'http://homepages.nyu.edu/~alr237/discharge_flipside.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (358, N'GBH', N'The influential, long-lived punk metal band G.B.H. rose to prominence in England during the early ''80s when hardcore punk began inching toward heavy metal. Originally formed in 1979 in Birmingham, England, G.B.H. initially called itself Charged G.B.H. to differentiate itself from another band called G.B.H. The leather-clad, hair-spiked foursome began recording for the Clay label in the early ''80s, releasing some singles before unleashing their influential debut album, City Baby Attacked by Rats, in 1982. City Baby''s Revenge followed two years later in 1984, by which time the band had become one of the leading punk metal bands of the era. G.B.H. continued recording and releasing albums throughout the ''80s, though their influence progressively waned as a new wave of bands such as Slayer emerged and pushed punk metal toward what became known as speed metal and, in turn, thrash. Despite its waning influence, G.B.H. soldiered on, recording new albums throughout the ''90s and into the next millennium. By this point the band was often cited by both metal and punk bands as a huge influence, and a renewed interest in G.B.H.''s early recordings resulted.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0001/854/MI0001854704.jpg?partner=allrovi.com', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (359, N'Quicksand', N'The alternative metal band Quicksand emerged from the New York City hardcore scene of the late ''80s; before coming together in 1990, singer/guitarist Walter Schreifels, guitarist Tom Capone, bassist Sergio Vega, and drummer Alan Cage all honed their chops in a series of local acts, including Youth of Today, the Gorilla Biscuits, and Bold and Beyond. A self-titled EP soon followed, and in 1992, Quicksand issued their Polygram debut, Slip, earning airplay with the single "Dine Alone." After touring in support of their sophomore effort, 1995''s Manic Compression, the group disbanded, only to attempt an unfruitful reunion two years later before going their separate ways once more. Quicksand''s former members have since cropped up in other outfits (Capone in Handsome, Schreifels in Rival Schools, etc.), and although they never broke out of cult status over the course of their two-album-long career, Quicksand''s influence can still be felt, especially on such bands as Grade, Absolve, Thursday, and At the Drive-In, among others.', N'http://cps-static.rovicorp.com/3/JPG_250/MI0002/261/MI0002261606.jpg?partner=allrovi.com', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (360, N'Judas Priest', N'Judas Priest was one of the most influential heavy metal bands of the ''70s, spearheading the New Wave of British Heavy Metal late in the decade. Decked out in leather and chains, the band fused the gothic doom of Black Sabbath with the riffs and speed of Led Zeppelin, as well as adding a vicious two-lead guitar attack; in doing so, they set the pace for much popular heavy metal from 1975 until 1985, as well as laying the groundwork for the speed and death metal of the ''80s.

Formed in Birmingham, England, in 1970, the group''s core members were guitarist K.K. Downing and bassist Ian Hill. Joined by Alan Atkins and drummer John Ellis, the band played their first concert in 1971. Atkins'' previous band was called Judas Priest, yet the members decided it was the best name for the new group. The band played numerous shows throughout 1971; during the year, Ellis was replaced by Alan Moore; by the end of the year, Chris Campbell replaced Moore. After a solid year of touring the U.K., Atkins and Campbell left the band in 1973 and were replaced by vocalist Rob Halford and drummer John Hinch. They continued touring, including a visit to Germany and the Netherlands in 1974. By the time the tour was completed, they had secured a record contract with Gull, an independent U.K. label. Before recording their debut album, Judas Priest added guitarist Glenn Tipton.

Rocka RollaRocka Rolla was released in September of 1974 to almost no attention. The following year, they gave a well-received performance at the Reading Festival and Hinch departed the band; he was replaced by Alan Moore. Later that year, the group released Sad Wings of Destiny, which earned some positive reviews. However, the lack of sales was putting the band in a dire financial situation, which was remedied by an international contract with CBS Records. Sin After Sin (1977) was the first album released under that contract; it was recorded with Simon Phillips, who replaced Moore. The record received positive reviews and the band departed for their first American tour, with Les Binks on drums.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0003/369/MI0003369318.jpg?partner=allrovi.com', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (361, N'Einstürzende Neubauten', N'Along with Cabaret Voltaire and Throbbing Gristle, Germany''s Einstürzende Neubauten ("collapsing new buildings") helped pioneer industrial music with an avant-garde mix of white-noise guitar drones, vocals verging on the unlistenable at times, and a clanging, rhythmic din produced by a percussion section consisting of construction materials, power tools, and various metal objects. Einstürzende Neubauten were founded by vocalist/guitarist Blixa Bargeld and percussionist/American expatriate N.U. Unruh in Berlin as a performance art collective; their early activities included a seemingly inexplicable half-naked appearance on the Berlin Autobahn, where the duo spent some time beating on the sides of a hole in an overpass. The group''s early lineup also included percussionists Beate Bartel and Gudrun Gut, plus contributor and sound engineer Alexander Van Borsig

KollapsEinstürzende Neubauten''s earliest recordings are mostly unstructured, free-form noise issued on various cassettes and singles, including their first single "Fuer den Untergang," the 1981 EP Schwarz, and the 1982 album Kollaps. Some of these recordings are compiled on the Strategies Against Architecture ''80-''83 collection, with live shows on the cassette-only 2x4. Bartel and Gut were replaced by ex-Abwräts member F.M. Einheit (who served as Neubauten''s chief machinery operator) in 1983, when guitarist and electronics expert Alexander Hacke and Abwräts bassist Mark Chung also joined. A tour of England opening for the Birthday Party resulted in a contract with Some Bizarre Records, which released the slightly more structured Zeichnungen des Patienten O.T., as well as consternation from club owners and journalists over Neubauten''s stage demolitions and frequent ensuing violence.', N'http://cps-static.rovicorp.com/3/JPG_400/MI0001/405/MI0001405670.jpg?partner=allrovi.com', NULL)
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (362, N'Attitude Adjustment', N'Attitude Adjustment is a crossover thrash band originally formed in the early 1980s in the San Francisco Bay Area.

The band was formed by Chris Kontos, Eric Smith and Rick Strahl in early 1985, with Nick Koljian briefly on vocals. The lineup was changed with the addition of Kevin Reed on vocals. This lineup played a number of initial shows at Ruthies Inn, the New Method, the Mabuhay Gardens and other Bay Area venues. Several months later, Kevin Reed was replaced by Andy Andersen on vocals and Chris Scapparo joined as a second guitarist. They shortly went into the studio to record the "Dead Serious Demo" in 1985. The demo was recorded at Peter Miller Studios and engineered by Eric Kauschen.

In 1986 and 1987, Attitude Adjustment played frequent gigs throughout California. They played alongside bands like Forbidden (Known as Forbidden Evil at that time), Vio-Lence, Sacrilege, Possessed, Hirax, Death Angel, R.K.L., Dr. Know, Suicidal Tendencies, Corrosion of Conformity, D.R.I., Discharge, UK Subs, Neurosis, The Exploited and Operation Ivy, among others. The band finally released their debut album, American Paranoia released by Pusmort Records. This album is considered to be a "crossover" between hardcore and thrash metal and was one of the first in this genre.

At the end of 1987, Andy Andersen, Chris Scaparro and Rick Strahl joined up with former Condemned to Death guitarist Keith Chatham, to form Condemned Attitude, which would later be renamed Attitude.

Attitude released an LP and an EP, taking a more thrash metal-like style, with Andy Andersen returning to his initial style of singing. Rick Strahl and Chris Scaparro became the new guitarists with Eric Brecht (formerly of DRI) on drums during this time.

Chris Kontos, Eric Smith and Kevin Reed continued on with Attitude Adjustment and in 1988, this new lineup released the EP No More Mr. Nice Guy, again on Pusmort Records, which is very different from American Paranoia.

By 1990, former members Andy Anderson, Chris Scaparro, and Rick Strahl formed a new band with a more hard rock direction. The band was called Two Bit Thief and they kept it alive until 1995.

Kontos and Reed returned to the name "Attitude Adjustment" in 1991, but with another new lineup to record their last studio album, Out Of Hand, again mixing hardcore with thrash metal. In 1993, the American Paranoia LP and the No More Mr. Nice Guy EP were re-issued on CD. The LP version includes the "Dead Serious" demo.

Chris Kontos joined Robb Flynn (who left Vio-Lence) in 1993 to form the post thrash band Machine Head.', N'http://west-wind.com/rick/photoalbum/band/newmethod.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (598, N'Van Halen', N'LA Rock Legends of the third kind!', NULL, N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (599, N'Scorpions', N'The Scorprions are good old fashioned German Hard Rock from the 80s and beyond.', NULL, N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (631, N'Merciful Fate', N'Arguably the most original and critically acclaimed group to come from Denmark was Mercyful Fate. Mercyful Fate''s nucleus comprised of the multi-octave vocals of King Diamond aka Kim Bendix Petersen, and the twin lead guitar attack of Hank Sherman aka Rene Krolmark and Michael Denner. ''Melissa'' was the group''s first formal recording and was a featured LP for Road Runner Records. Although ''Melissa'' was originally released in 1983, and re-released in 1997, Roadrunner Records has remastered the songs and released this classic for your listening enjoyment. It includes the highly sought after early 1980''s BBC sessions, two extra demo tracks of ''Black Funeral'', and ''Curse of the Pharaohs'' and a three track DVD featuring live footage of the band during early 1983. A commentary by King Diamond himself narrates the performance and the story of the group during that time frame. Mercyful Fate pioneered a sub genre of ultra heavy and complex music renown for its macabre lyrics, and Satanic/occultism driven imagery and attitude called Black Metal.', N'http://www.metalinjection.net/wp-content/uploads/2014/07/mercyful-fate_photo03.jpg', N'http://www.amazon.com/gp/product/B0011ZVVJ2/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0011ZVVJ2&linkCode=as2&tag=westwindtechn-20&linkId=VAIRVQFRSELFJ7V2')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (632, N'Death Angel', N'Death Angel is a thrash metal band from Concord, California, initially active from 1982 to 1991 and again since 2001. Death Angel has released seven studio albums, two demo tapes, one box set and two live albums.

Two independent releases, The Ultra-Violence (1987) and Frolic Through the Park (1988), attracted the attention of Geffen Records, which signed the quintet in 1989 and released their next album, Act III, one year later. While Death Angel was touring in support of Act III, drummer Andy Galeon was injured in a tour bus accident and needed more than a year to fully recover. This resulted in the band''s break up in 1991. However, Death Angel reformed in 2001 (without original guitarist Gus Pepa) at the Thrash of the Titans benefit concert for Testament singer Chuck Billy. The band continues to record and perform today.', N'http://1.bp.blogspot.com/_uiTrE4Nd4kg/S2XPYowzYjI/AAAAAAAAK0M/qnu-CmKEnHA/s400/f_7m_3758f17.jpg', NULL)
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1686, N'Bad Religion', N'Bad Religion is a punk rock band that formed in Los Angeles, California in 1979. The band makes extensive use of soaring 3-part vocal harmonies (which they refer to in their album liner notes as the "oozin'' aahs"), guitar solos and lyrics that often contain political commentary. Their lyrics often relate to matters of social responsibility. The band''s lineup has changed several times over its lifespan, with lead vocalist Greg Graffin being the only consistent member; the current lineup, however, features three out of four of the band''s original members (Graffin, Brett Gurewitz and Jay Bentley). Bad Religion has released sixteen studio albums, two live albums, three compilation albums, three EPs (one of which is composed of covers of Christmas songs), and two DVDs (which were both recorded live).

Although they gained a cult following with many of their early albums, Bad Religion did not experience major worldwide commercial success until the 1994 release of their eighth studio album Stranger Than Fiction, which spawned their biggest hits "Infected" and a re-recorded version of "21st Century (Digital Boy)", and was certified gold in both the United States and Canada. Their latest album, True North, was released on January 22, 2013. Bad Religion is one of the best-selling punk rock acts of all time,[4] having sold over 5 million albums worldwide.', N'http://www.badreligion.com/dispatch/_depot/timeline/x495/e68bf6f37ec5c66eed7100eca6ce2748.jpg', N'http://www.amazon.com/Bad-Religion/e/B000APVNBA/digital/?_encoding=UTF8&camp=1789&creative=390957&linkCode=ur2&sn=d&tag=westwindtechn-20&linkId=YOVVU6XHUYGAA6GY')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1687, N'Anthrax', N'Anthrax is an American thrash metal band from New York, formed in 1981 by guitarist Scott Ian and bassist Dan Lilker. The group was considered one of the leaders of the thrash metal scene during the 1980s. When the genre''s popularity increased, Anthrax was one of its "big four" with Metallica, Megadeth and Slayer. As of 2014 the band has released ten studio albums, a number of singles and an EP with American hip hop group Public Enemy. According to Nielsen SoundScan Anthrax sold 2.5 million records in the United States from 1991 to 2004, with worldwide sales of over 15 million.', N'http://www.leatherrebel.com/anthrax2.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1694, N'Angelwitch', N'Angel Witch are a British heavy metal band which formed in London, England in 1977 as part of the New Wave of British Heavy Metal movement. Despite critical acclaim in the music press, their only UK chart action consisted of a single week at No.75 (the lowest position in the charts) in 1980.', N'https://a3-images.myspacecdn.com/images03/1/b2134515aece415eb16302628981de87/300x300.jpg', N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1706, N'Rise Against', N'Rise Against is an American melodic hardcore band from Chicago, Illinois, formed in 1999. The band''s current line-up comprises vocalist/rhythm guitarist Tim McIlrath, lead guitarist Zach Blair, bassist Joe Principe and drummer Brandon Barnes. Former members are guitarists Dan Wlekinski, Kevin White, Todd Mohney and Chris Chasse, and drummers Toni Tintari and Dan Lumley.

The band spent its first four years signed to the independent record label Fat Wreck Chords, on which it released two studio albums, The Unraveling (2001) and Revolutions per Minute (2003). Both the albums met with considerable underground success, and in 2003 the band signed with the major label Geffen. Their major label debut Siren Song of the Counter Culture (2004) brought the band mainstream success, producing several successful singles. Their next two albums, The Sufferer & the Witness (2006) and Appeal to Reason (2008), were also successful and peaked at number ten and number three on the Billboard 200 chart, respectively. Appeal to Reason was followed three years later by Endgame (2011).[1] All four albums released via Geffen were certified platinum in Canada, while three of these albums were certified gold in the United States.

Rise Against is also known for their advocacy of progressivism, supporting organisations such as Amnesty International and the It Gets Better Project. The band actively promotes animal rights and most of the members are straight edge (excluding Barnes), PETA supporters and vegetarians.', N'https://upload.wikimedia.org/wikipedia/commons/b/bf/Rise_Against_at_RAMFest_2013_in_Johannesburg%2C_South_Africa.jpg', N'http://amzn.to/1f4tMyQ')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1707, N'Raw Power', N'Italian punk band Raw Power makes its name proud by providing the raw, screaming energy of  a live wire. Loud, crazy wild and with some wicked guitars to fire it all up. Raw Power are a true and underappreciated punk legend.', NULL, N'')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1708, N'Anti-Trust', N'Anti-Trust is a side project by ex-Attitude Adjustment members Chris Kontos and Rick Strahl. This collaboration produced a handful of songs that were garage recorded in Oakland, CA and Maui, HI in 2001 and 2002. The music features old school hardcore and metal cross over, driven by catchy guitar driven rythms and catchy choruses with an overall edgy sound.', N'http://americanparanoia.com/rockon2.jpg', N'http://americanparanoia.com')
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1709, N'Probot', NULL, NULL, NULL)
GO
INSERT [dbo].[Artists] ([Id], [ArtistName], [Description], [ImageUrl], [AmazonUrl]) VALUES (1710, N'Toxic Holocaust', N'Joel Grind founded Toxic Holocaust in 1999. He originally wrote and recorded all of the band''s music himself, and after a couple of demo releases (Radiation Sickness, 1999; Critical Mass, 2002), he made his official full-length album debut as Toxic Holocaust with Evil Never Dies (2003). Two years later, after some touring with a hired backing band, Grind released the second Toxic Holocaust album, Hell on Earth (2005), which once again he wrote and recorded by himself. The album notably features cover art by Ed Repka, known for having created iconic covers for albums by Megadeth, Death and others. Extensive touring followed, along with a recording contract with Relapse Records. In addition to releasing the third Toxic Holocaust album, An Overdose of Death... (2008), Relapse reissued Evil Never Dies and Hell on Earth. Toxic Holocaust also recorded and released a number of other recordings: Gravelord (2009, EP), Conjure and Command (2011), and Chemistry of Consciousness (2013).', N'http://www.terrorizer.com/terrorizerwordpress/wp-content/uploads/2013/10/tox.jpg', N'http://amzn.to/27R10JN')
GO
SET IDENTITY_INSERT [dbo].[Artists] OFF
GO
SET IDENTITY_INSERT [dbo].[Tracks] ON 

GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1, 1, N'For Those About To Rock (We Salute You)', N'5:03', 11170334, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (2, 2, N'Balls to the Wall', N'5:02', 5510424, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3, 3, N'Fast As a Shark', N'3:10', 3990994, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4, 3, N'Restless and Wild', N'4:12', 4331779, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6, 1, N'Put The Finger On You', N'3:05', 6713451, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7, 1, N'Let''s Get It Up', N'3:13', 7636561, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8, 1, N'Inject The Venom', N'3:10', 6852860, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (9, 1, N'Snowballed', N'3:03', 6599424, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (10, 1, N'Evil Walks', N'4:03', 8611245, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (11, 1, N'C.O.D.', N'3:19', 6566314, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (12, 1, N'Breaking The Rules', N'4:03', 8596840, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (13, 1, N'Night Of The Long Knives', N'3:05', 6706347, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (14, 1, N'Spellbound', N'4:10', 8817038, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (15, 4, N'Go Down', N'5:11', 10847611, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (16, 4, N'Dog Eat Dog', N'3:15', 7032162, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (17, 4, N'Let There Be Rock', N'6:06', 12021261, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (18, 4, N'Bad Boy Boogie', N'4:07', 8776140, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (19, 4, N'Problem Child', N'5:05', 10617116, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (20, 4, N'Overdose', N'6:09', 12066294, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (21, 4, N'Hell Ain''t A Bad Place To Be', N'4:14', 8331286, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (22, 4, N'Whole Lotta Rosie', N'5:03', 10547154, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (23, 5, N'Heavy Metal Thunder', N'4:27', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (24, 5, N'To and back again', N'4:57', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (25, 5, N'Strong Arm of the Law', N'4:54', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (26, 5, N'Taking your Chances', N'4:26', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (27, 5, N'20,000 Feet', N'3:30', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (28, 6, N'Motorcyle Man', N'3:58', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (29, 6, N'Wheels of Steel', N'5:58', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (30, 6, N'Machine Gun', N'5:23', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (31, 6, N'Freeway Mad', N'2:41', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (32, 8, N'Smokin'' Valves', N'3:41', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (33, 8, N'Death or Glory', N'3:36', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (34, 8, N'Heavy Metal Mania', N'4:50', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (35, 8, N'The Nightcomers', N'6:13', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (36, 8, N'The Small Hours', N'5:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (37, 9, N'Homeless Crew', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (38, 9, N'To Whom it may Concern', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (39, 9, N'Kicked in the Teeth', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (40, 9, N'Practicing for War', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (41, 9, N'No TV Sketch', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (42, 9, N'Save Thy Brother', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (43, 9, N'Warhead', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (44, 9, N'When Worlds Collide', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (45, 9, N'Third World Child', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (46, 12, N'Antisocial', N'5:09', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (47, 12, N'Monsieur Comedie', N'3:25', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (48, 12, N'Instinct de Mort', N'3:46', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (49, 12, N'Au No De La Race', N'3:24', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (50, 12, N'Passe', N'3:43', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (51, 7, N'We Die Young', N'2:12', 4925362, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (52, 7, N'Man In The Box', N'4:06', 9310272, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (53, 7, N'Sea Of Sorrow', N'5:09', 11316328, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (54, 7, N'Bleed The Freak', N'4:01', 7847716, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (55, 7, N'I Can''t Remember', N'3:02', 7302550, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (56, 7, N'Love, Hate, Love', N'6:07', 12575396, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (57, 7, N'It Ain''t Like That', N'4:17', 8993793, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (58, 7, N'Sunshine', N'4:04', 9216057, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (59, 7, N'Put You Down', N'3:16', 6420530, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (60, 7, N'Confusion', N'5:04', 11183647, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (61, 7, N'I Know Somethin (Bout You)', N'4:01', 8497788, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (62, 7, N'Real Thing', N'4:03', 7937731, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (63, 13, N'Préfabriqués', N'2:59', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (64, 13, N'Palace', N'5:26', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (65, 13, N'Police Milice', N'2:24', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (66, 13, N'Ride On', N'6:45', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (85, 10, N'Cochise', N'3:02', 5339931, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (86, 10, N'Show Me How to Live', N'4:17', 6672176, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (87, 10, N'Gasoline', N'4:19', 6709793, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (88, 10, N'What You Are', N'4:09', 5988186, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (89, 10, N'Like a Stone', N'4:14', 7059624, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (90, 10, N'Set It Off', N'4:03', 6321091, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (91, 10, N'Shadow on the Sun', N'5:03', 8245793, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (92, 10, N'I am the Highway', N'5:14', 8041411, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (93, 10, N'Exploder', N'3:06', 4948095, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (94, 10, N'Hypnotize', N'3:06', 4961887, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (95, 10, N'Bring''em Back Alive', N'5:09', 7911634, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (96, 10, N'Light My Way', N'5:03', 7289084, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (97, 10, N'Getaway Car', N'4:19', 7193162, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (98, 10, N'The Last Remaining Light', N'5:17', 7622615, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (99, 11, N'Your Time Has Come', N'4:15', 8273592, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (100, 11, N'Out Of Exile', N'4:11', 9506571, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (101, 11, N'Be Yourself', N'4:19', 9106160, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (102, 11, N'Doesn''t Remind Me', N'4:15', 8357387, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (103, 11, N'Drown Me Slowly', N'3:13', 7609178, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (104, 11, N'Heaven''s Dead', N'4:16', 9006158, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (105, 11, N'The Worm', N'3:17', 7710800, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (106, 11, N'Man Or Animal', N'3:13', 7542942, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (107, 11, N'Yesterday To Tomorrow', N'4:13', 8944205, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (108, 11, N'Dandelion', N'4:18', 9003592, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (109, 11, N'#1 Zero', N'4:19', 9731988, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (110, 11, N'The Curse', N'5:09', 10029406, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (408, 35, N'Free Speech For The Dumb', N'2:15', 5076048, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (409, 35, N'It''s Electric', N'3:13', 6978601, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (410, 35, N'Sabbra Cadabra', N'6:00', 12418147, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (411, 35, N'Turn The Page', N'6:06', 11946327, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (412, 35, N'Die Die My Darling', N'2:09', 4867667, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (413, 35, N'Loverman', N'7:12', 15446975, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (414, 35, N'Mercyful Fate', N'11:11', 21942829, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (415, 35, N'Astronomy', N'6:17', 13065612, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (416, 35, N'Whiskey In The Jar', N'5:05', 9943129, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (417, 35, N'Tuesday''s Gone', N'9:05', 17900787, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (418, 35, N'The More I See', N'4:07', 9378873, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1829, 150, N'Hit The Lights', N'4:17', 8357088, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1830, 150, N'The Four Horsemen', N'7:13', 14178138, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1831, 150, N'Motorbreath', N'3:08', 6153933, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1832, 150, N'Jump In The Fire', N'4:01', 9135755, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1833, 150, N'(Anesthesia) Pulling Teeth', N'4:14', 8234710, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1834, 150, N'Whiplash', N'4:09', 8102839, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1835, 150, N'Phantom Lord', N'5:02', 9817143, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1836, 150, N'No Remorse', N'6:06', 12672166, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1837, 150, N'Seek & Destroy', N'6:15', 13452301, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1838, 150, N'Metal Militia', N'5:11', 10141785, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1874, 154, N'Fight Fire With Fire', N'4:05', 9420856, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1875, 154, N'Ride The Lightning', N'6:17', 13055884, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1876, 154, N'For Whom The Bell Tolls', N'5:11', 10159725, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1877, 154, N'Fade To Black', N'6:14', 13531954, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1878, 154, N'Trapped Under Ice', N'4:04', 7975942, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1879, 154, N'Escape', N'4:04', 8652332, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1880, 154, N'Creeping Death', N'6:16', 12955593, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (1881, 154, N'The Call Of Ktulu', N'8:14', 17486240, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3389, 271, N'Revelations', N'4:12', 4111051, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3390, 271, N'One and the Same', N'3:17', 3559040, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3391, 271, N'Sound of a Gun', N'4:00', 4234990, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3392, 271, N'Until We Fall', N'3:10', 3766605, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3393, 271, N'Original Fire', N'3:18', 3577821, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3394, 271, N'Broken City', N'3:08', 3728955, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3395, 271, N'Somedays', N'3:13', 3497176, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3396, 271, N'Shape of Things to Come', N'4:14', 4465399, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3397, 271, N'Jewel of the Summertime', N'3:13', 3806103, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3398, 271, N'Wide Awake', N'4:06', 4333050, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3399, 271, N'Nothing Left to Say But Goodbye', N'3:13', 3484335, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3400, 271, N'Moth', N'4:18', 4838884, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3401, 271, N'Show Me How to Live (Live at the Quart Festival)', N'5:01', 4901540, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (3402, 271, N'Band Members Discuss Tracks from "Revelations"', N'4:14', 61118891, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4946, 618, N'Dirty Deeds Done Dirt Cheap', N'4:11', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4947, 618, N'Love at First Feel', N'3:10', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4948, 618, N'Big Balls', N'2:38', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4949, 618, N'Rocker', N'2:49', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4950, 618, N'Problem Child', N'5:44', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4951, 618, N'There''s going to be some Rocking', N'3:17', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4952, 618, N'Ain''t no fun (waiting around to be a millionaire', N'7:29', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4953, 618, N'Ride on', N'5:49', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4954, 618, N'Squealer', N'5:14', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4955, 511, N'Big Time Game Hunting', N'2:40', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4956, 511, N'Aggressive System', N'1:22', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4957, 511, N'Thoughts of Equality', N'3:57', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4958, 511, N'Practicing for War', N'1:45', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4959, 511, N'Crutch', N'0:37', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4960, 511, N'Anti-Social', N'2:35', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4961, 511, N'Cavern in Time', N'2:56', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4962, 511, N'Crucified System', N'3:05', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4963, 511, N'Emotional Blur', N'3:25', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4964, 511, N'Cleansing Pool', N'2:26', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4965, 511, N'Ocean', N'1:25', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4966, 511, N'Save Thy Brother', N'2:57', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4967, 511, N'D-Day', N'0:46', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (4968, 511, N'When Worlds Collide', N'3:16', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5075, 521, N'CID', N'2:47', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5076, 521, N'I couldn''t be you', N'3:21', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5077, 521, N'I live in a car', N'2:37', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5078, 521, N'Tomorrows Girls', N'3:35', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5079, 521, N'Kicks', N'4:57', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5080, 521, N'Left for Dead', N'4:57', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5081, 521, N'Rat Race', N'5:18', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5082, 521, N'War Head', N'4:06', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5083, 521, N'New York State Police', N'5:47', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5084, 521, N'Telephone Numbers', N'4:17', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5085, 521, N'Public Servant', N'1:38', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5086, 521, N'Rockers', N'2:45', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5087, 521, N'Public Servant', N'1:31', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5088, 521, N'Crash Course', N'2:43', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5089, 521, N'Emotional Blackmail', N'3:35', 0, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5090, 2, N'Fight it back', N'3:57', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5091, 2, N'London Leatherboys', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5093, 2, N'Head over Heels', N'3:44', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5094, 2, N'Losing more than you''ve ever had', N'4:22', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5095, 2, N'Love Child', N'5:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5096, 582, N'Du lebst nur einmal', N'2:09', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5097, 584, N'Believe', N'3:46', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5098, 584, N'This is not the end', N'3:59', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5099, 584, N'Time won''t let me go', N'4:11', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5100, 584, N'Above and below', N'3:30', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5101, 587, N'Bomb Track', N'4:03', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5102, 587, N'Killing in the Name', N'5:13', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5103, 587, N'Take the Power Back', N'5:36', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5104, 587, N'Settle for Nothing', N'4:47', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5105, 587, N'Bullet in the Head', N'5:07', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5106, 587, N'Know your Enemy', N'4:54', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5112, 590, N'Ninja', N'4:31', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5113, 590, N'Kill the Power', N'4:35', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5114, 590, N'Ruling Force', N'3:52', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5115, 591, N'Hard Ride', N'4:10', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5116, 591, N'Hell Patrol', N'3:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5117, 591, N'Don''t need your Money', N'3:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5118, 591, N'Rock into the Future', N'3:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5119, 4, N'Blue Eyed Sleeker', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5120, 592, N'City Boys', N'3:20', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5121, 592, N'Industry', N'4:01', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5122, 592, N'Love/Hate', N'3:01', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5123, 592, N'Hard Times', N'2:45', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5124, 592, N'Broken Hearts', N'3:45', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5125, 592, N'Folson Prison Blues', N'3:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5126, 592, N'Desperado', N'3:32', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5127, 593, N'Bonded By Blood', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5128, 593, N'Exodus', N'4:10', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5129, 593, N'Then there were none', N'4:22', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5130, 593, N'A Lesson in Violence', N'3:45', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5131, 595, N'Punk''s Not Dead', N'1:53', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5132, 595, N'Mucky Pup', N'1:45', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5133, 595, N'Cop Cars', N'1:55', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5134, 595, N'Free Flight', N'3:36', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5135, 595, N'Sex & Violence', N'5:11', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5136, 596, N'The Ides of March', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5137, 596, N'WrathChild', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5138, 596, N'Murder in the Rue Morgue', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5139, 596, N'Another Life', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5140, 596, N'Killers', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5141, 597, N'Tribe', N'4:21', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5142, 597, N'Machine Action', N'5:40', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5143, 597, N'Racked', N'4:10', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5144, 597, N'Crazy Love', N'4:54', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5145, 597, N'Above me', N'4:59', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5156, 597, N'Gotta Believe', N'4:01', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5157, 598, N'Running with the Devil', N'3:37', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5158, 598, N'Eruption', N'1:42', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5159, 598, N'You really Got Me', N'2:37', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5160, 598, N'Ain''t talking about Love', N'3:49', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5161, 599, N'Blackout', N'3:48', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5162, 600, N'Thumb', N'4:41', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5163, 600, N'Green Machine', N'3:38', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5164, 601, N'Broken Lungs', N'4:14', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5165, 601, N'The Sky is falling', N'4:21', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5166, 601, N'Moving Mountains', N'2:55', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5167, 603, N'Plastic Bomb', N'3:07', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5168, 603, N'Deep Sleep', N'2:23', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5169, 604, N'Warning', N'2:49', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5170, 604, N'Never Again', N'2:20', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5171, 604, N'Hear Nothing, See Nothing, Say Nothing', N'1:29', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5172, 604, N'Where there''s a Will', N'2:05', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5173, 604, N'The Price of Silence', N'2:20', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5174, 604, N'Born to Die in the Gutter', N'2:27', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5175, 605, N'Time Bomb', N'2:26', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5176, 605, N'Sick Boy', N'2:32', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5177, 605, N'City Baby Attacked by Rats', N'2:34', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5178, 607, N'Battery', N'5:10', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5179, 607, N'Master of Puppets', N'8:38', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5180, 607, N'The thing that should not be', N'6:32', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5186, 609, N'Rapid Fire', N'4:08', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5187, 609, N'Breaking the Law', N'3:58', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5188, 609, N'Grinder', N'3:57', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5189, 610, N'Exciter', N'5:32', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5190, 610, N'Running Wild', N'2:49', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5191, 610, N'Sinner', N'7:29', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5192, 610, N'The Ripper', N'2:34', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5193, 610, N'The Green Manilishi', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5194, 611, N'The Grudge', N'8:36', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5195, 611, N'Eo Blue Apocalypse', N'1:04', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5196, 611, N'The Patient', N'7:13', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5197, 611, N'Schism', N'6:47', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5198, 611, N'Parabol', N'3:04', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5199, 612, N'Tanz Debil', N'3:23', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5200, 612, N'Steh auf Berlin', N'3:47', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5201, 612, N'Negativ Nein', N'2:27', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5202, 612, N'U-Haft Musik', N'3:41', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5203, 613, N'Heaven''s not overflowing', N'5:02', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5204, 613, N'Albatross', N'5:20', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5205, 613, N'Clean my Wounds', N'3:32', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5206, 613, N'Deliverance', N'4:23', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5208, 615, N'Stay Clean', N'2:50', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5209, 615, N'Metropolis', N'3:31', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5210, 615, N'The Hammer', N'3:05', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5211, 615, N'Iron Horse', N'3:58', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5212, 615, N'No Class', N'2:34', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5213, 615, N'Overkill', N'5:13', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5214, 616, N'Grey World', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5215, 616, N'Bombs', N'0:0)', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5216, 616, N'Hunger and Poverty', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5217, 616, N'Fuck Chuck', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5218, 616, N'Dead Serious', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5219, 616, N'American Paranoia', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5220, 617, N'Strom', N'2:45', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5221, 617, N'Immer Alles Neu', N'2:57', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5222, 617, N'Auflösen', N'3:19', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5223, 617, N'Teil von Mir', N'3:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5224, 516, N'Ace of Spades (Sql)', N'2:49', 0, CAST(1.29 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5225, 516, N'Love me like a Reptile', N'2:23', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5226, 516, N'Shoot you in back', N'2:39', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5227, 516, N'We are the Road Crew', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5228, 516, N'The Chase is better than the Catch', N'4:18', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5229, 512, N'Loss for Words', N'4:03', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5230, 512, N'Mad World', N'1:53', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5231, 512, N'Consumed', N'2:52', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5232, 512, N'Holier', N'2:25', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5233, 512, N'Positive Outlook', N'3:01', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5234, 514, N'Low Self Opinion', N'5:24', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5235, 514, N'Grip', N'4:51', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5236, 514, N'Tearing', N'4:56', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5237, 514, N'You Didn''t Need', N'5:30', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5238, 514, N'Almost Real', N'8:05', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5239, 514, N'Obscene', N'8:46', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5240, 514, N'What do you do?', N'7:25', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5241, 514, N'Blues Jam', N'11:49', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5242, 515, N'Dicsonnect', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5243, 515, N'Fool', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5244, 515, N'Liar', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5245, 515, N'Alien Blueprint', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5246, 582, N'Was zaehlt', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5247, 582, N'Tier', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5248, 582, N'Kanzler Sein', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5249, 619, N'Kopf oder Zahl', N'2:46', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5250, 619, N'Ich bin die Sehnsucht', N'4:02', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5251, 619, N'Ich bin Sehnsucht in dir', N'4:02', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5252, 619, N'Weisses Rauschen', N'2:07', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (5260, 3, N'Princess of the Dawn', N'6:15', 6290521, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6253, 592, N'Another Sad Story', N'3:23', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6305, 655, N'Kicked in the Teeth', N'3:25', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6306, 655, N'SummerTime Blues', N'3:48', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6307, 655, N'Warhead', N'2:51', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6308, 655, N'It''s no TV Sketch', N'01:32', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6309, 655, N'Freak', N'3:14', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6317, 659, N'Seemingly Endless Time', N'3:50', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6318, 659, N'Stop', N'5:10', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6319, 659, N'The Orgization', N'4:16', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (6320, 659, N'A Room with a View', N'4:41', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7423, 1644, N'Curse of the Pharaohs', N'3:10', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7424, 1644, N'Black Funeral', N'4:44', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7425, 1644, N'Into the Coven', N'3:42', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7426, 1704, N'You are (the government)', N'1:22', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7427, 1704, N'1000 More Fools', N'1:35', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7428, 1704, N'How much is enough?', N'1:22', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7429, 1704, N'When?', N'1:40', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7430, 1704, N'Give you nothing', N'2:02', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7431, 1704, N'Land of Competition', N'2:04', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7432, 1705, N'SuperSonic', N'1:46', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7433, 1705, N'Prove it', N'1:14', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7434, 1705, N'Can''t Stop It', N'1:09', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7441, 1707, N'Thrashers', N'7:11', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7442, 1707, N'Evil Priest', N'4.54', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7443, 1707, N'Voracious Souls', N'5:39', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7444, 1707, N'Kill as One', N'4:59', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7445, 1707, N'The Ultra-Violence', N'10:33', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7446, 1707, N'Mistress of Pain', N'4:04', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7447, 1708, N'Among the Living', N'5:16', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7448, 1708, N'Caught in a Mosh', N'5:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7449, 1708, N'I am the Law', N'5:54', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7450, 1708, N'Indians', N'5:41', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7451, 1708, N'One World', N'5:55', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7452, 1709, N'Potters Field', N'5:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7453, 1709, N'Only', N'4:56', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7454, 1709, N'Packaged Rebellion', N'6:16', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7455, 1709, N'Room for One More', N'4:55', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7460, 1710, N'Stinkfirstr', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7461, 1710, N'Eulogy', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7462, 1710, N'H.', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7463, 1710, N'Useful Idiot', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7464, 1710, N'Forty size and 2', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7465, 1712, N'Incomplete', N'2:29', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7466, 1712, N'Leave Mine to Me', N'2:07', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7467, 1712, N'Stranger to Fiction', N'2:20', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7468, 1712, N'Tiny Voices', N'2:37', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7469, 1711, N'To Crawl Under One''s Skin', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7470, 1711, N'Souls at Zero', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7471, 1711, N'Zero', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7472, 1711, N'Flight', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7473, 1711, N'Web', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7489, 1715, N'Run if you Can', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7490, 1715, N'Son of a Bitch', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7491, 1715, N'Starlight', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7492, 1715, N'Breaker', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7535, 616, N'9 to 5 Religion', N'0:00', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7536, 1716, N'Not a lot to Save', N'3:50', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7537, 1716, N'Crucifunkin''', N'4:32', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7538, 1716, N'Eyes of Stone', N'3:16', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7539, 1716, N'So Long', N'2:18', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7540, 1716, N'Buried', N'3:40', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7541, NULL, N'Jailbait', N'2:44', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7542, 1717, N'Iron Fist', N'2:55', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7543, 1717, N'Heart of Stone', N'3:04', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7544, 1717, N'I''m the doctor', N'2:43', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7545, 1718, N'Angelwitch', N'4:33', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7564, NULL, N'asdasd', N'12:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7565, NULL, N'Another song', N'2:43', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7566, NULL, N'More songs', N'2:22', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7567, 1719, N'Highway to Hell', N'3:33', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7568, 1719, N'Girls Got Rythm', N'4:33', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7569, 1720, N'Rock n''Roll Damnation', N'3:37', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7570, 1720, N'Down Payment Blues', N'6:03', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7571, 1720, N'Gimme a Bullet', N'3:21', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7572, 1720, N'Riff Raff', N'5:11', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7573, 1720, N'Sin City', N'4:45', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7574, 1721, N'Back in the Saddle', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7575, 1721, N'Last Child', N'3:26', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7576, 1721, N'Rats in the Cellar', N'4:06', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7577, 1721, N'Combination', N'3:39', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7578, 1722, N'War Pigs', N'7:54', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7579, 1722, N'Paranoid', N'2:48', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7580, 1722, N'Planet Caravan', N'4:29', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7581, 1722, N'Iron Man', N'5:55', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7582, 1723, N'A Dangerous Meeting', N'5:10', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7583, 1723, N'Nightmare', N'6:19', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7584, 1723, N'Desecration of Souls', N'4:54', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7585, 1723, N'Night of the Unborn', N'4:59', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7586, 1724, N'Loving you Sunday Morning', N'5:38', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7587, 1724, N'Another Piece of Meat', N'3:31', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7588, 1724, N'Always somewhere', N'4:58', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7589, 1724, N'Coast to Coast', N'4:43', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7590, 1725, N'The Shrouded Temples', N'2:36', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7591, 1725, N'Damned for all Time', N'2:36', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7592, 1725, N'Dance of the Dead', N'4:29', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7593, 1725, N'Buried', N'5:16', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7594, 1726, N'Lifestyles', N'3:13', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7595, 1726, N'Short Fuse', N'1:59', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7596, 1726, N'God not God', N'0:52', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7597, 1726, N'Ugly American', N'2:59', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7598, 1726, N'Made to be Broken', N'2:54', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7599, NULL, N'Jailbait', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7600, 516, N'Jailbait', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (7605, NULL, N'Jailbait', N'4:21', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8605, 1727, N'State of the Union', N'2:19', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8606, 1727, N'The First Drop', N'2:39', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8607, 1727, N'Life Less Frightening', N'3:44', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8608, 1727, N'Paper Wings', N'3:43', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8609, 1727, N'Blood to Bleed', N'3:49', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8610, 1728, N'Alive and Well', N'2:06', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8611, 1728, N'My Life Inside of Your Heart', N'3:02', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8612, 1728, N'Great Awakening', N'1:35', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8613, 1728, N'Six ways ''Til Sunday', N'2:36', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8614, 1728, N'401kill', N'3:19', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8615, 1728, N'The Unraveling', N'3:12', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8622, 1729, N'Curse of the Pharaohs', N'3:10', 3990994, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8623, 3, N'New One', N'6:15', 6290521, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8624, 1730, N'Curse of the Pharaohs', N'3:10', 3990994, CAST(0.99 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8625, 1732, N'Anti-social', N'2:25', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8626, 1732, N'Misery', N'0:49', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8627, 1732, N'I am you', N'2:37', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8628, 1732, N'No Privacy', N'2:22', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8629, 1732, N'Lost', N'1:24', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8630, 1732, N'Sick Inside', N'1:44', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8631, 1732, N'Day By Day', N'3:08', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8632, 1732, N'Guilty As Charged', N'2:06', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8633, 1733, N'Saint Cecilia', N'3:41', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8634, 1733, N'Sean', N'2:11', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8635, 1733, N'Savior Breath', N'3:11', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8636, 1733, N'Iron Rooster', N'4:11', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8637, 1733, N'The NeverEnding Sigh', N'4:45', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8638, 1734, N'Bridge Burning', N'4:46', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8639, 1734, N'Rope', N'4:19', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8640, 1734, N'Dear Rosemary', N'4:26', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8641, 1734, N'Arlandria', N'4:27', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8642, 1735, N'Dictatosaurus', N'3:52', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8643, 1735, N'Centuries of Sin', N'4:09', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8644, 1735, N'Red War', N'3:30', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8645, 1735, N'Shake your Blood', N'2:59', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8646, 1735, N'Access Babylon', N'1:24', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8647, 1736, N'Awaken the Serpent', N'1:34', 0, CAST(0.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Tracks] ([Id], [AlbumId], [SongName], [Length], [Bytes], [UnitPrice]) VALUES (8648, 1736, N'Rat Eater', N'1.55', 0, CAST(0.00 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT [dbo].[Tracks] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [Fullname]) VALUES (1, N'test', N'test', N'Test User')
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [Fullname]) VALUES (2, N'rstrahl@west-wind.com', N'ww', N'Rick Strahl')
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Albums] ADD  CONSTRAINT [DF_Albums_Title]  DEFAULT ('') FOR [Title]
GO
ALTER TABLE [dbo].[Albums] ADD  CONSTRAINT [DF_Albums_Description]  DEFAULT ('') FOR [Description]
GO
ALTER TABLE [dbo].[Albums] ADD  CONSTRAINT [DF_Albums_ImageUrl]  DEFAULT ('') FOR [ImageUrl]
GO
ALTER TABLE [dbo].[Albums] ADD  CONSTRAINT [DF_Albums_AmazonUrl]  DEFAULT ('') FOR [AmazonUrl]
GO
ALTER TABLE [dbo].[Albums] ADD  CONSTRAINT [DF_Albums_SpotifyUrl]  DEFAULT ('') FOR [SpotifyUrl]
GO
ALTER TABLE [dbo].[Artists] ADD  CONSTRAINT [DF_Artists_Description]  DEFAULT ('') FOR [Description]
GO
ALTER TABLE [dbo].[Artists] ADD  CONSTRAINT [DF_Artists_ImageUrl]  DEFAULT ('') FOR [ImageUrl]
GO
ALTER TABLE [dbo].[Artists] ADD  CONSTRAINT [DF_Artists_AmazonUrl]  DEFAULT ('') FOR [AmazonUrl]
GO
ALTER TABLE [dbo].[Albums]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Albums_dbo.Artists_ArtistId] FOREIGN KEY([ArtistId])
REFERENCES [dbo].[Artists] ([Id])
GO
ALTER TABLE [dbo].[Albums] CHECK CONSTRAINT [FK_dbo.Albums_dbo.Artists_ArtistId]
GO
ALTER TABLE [dbo].[Tracks]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Tracks_dbo.Albums_AlbumId] FOREIGN KEY([AlbumId])
REFERENCES [dbo].[Albums] ([Id])
GO
ALTER TABLE [dbo].[Tracks] CHECK CONSTRAINT [FK_dbo.Tracks_dbo.Albums_AlbumId]
GO
