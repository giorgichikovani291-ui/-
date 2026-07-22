რეალური ასეტებით ჩანაცვლდა (შენი ატვირთული ფაილებიდან):
hero-original.svg          ← fundo.svg
hero-redesign.svg          ← GTA_6_banner.svg
game-gta5.svg               ← GTA_5.svg
game-rdr2.svg                ← RED.svg
game-rdr-online.svg          ← RED_Online.svg
news-gta6-trailer.svg               ← GTA_6.svg
news-trailer-countdown.svg          ← Rectangle_24.svg
news-gta-online-update.svg          ← Rectangle_25.svg
promo-rdr2-buynow.svg               ← rgl-rdr2-buynow_1.svg (RedesignPromo-ში გამოიყენება)

ჯერ კიდევ placeholder-ია (გამოგზავნე რომ ჩავანაცვლო):
game-gta-online.svg          -> "GTA Online" ბარათი (featured games)
news-project-overthrow.svg   -> "2x GTA$ e RP nas missões do Projeto Subversão"
news-rockstar-shop.svg       -> "Novos produtos da Rockstar Games já disponíveis"
news-diamond-casino.svg      -> "Futuro com bônus... Diamond Casino"

ყველა card-ის კონტეინერს აქვს ზუსტად შესაბამისი aspect-ratio (src/data.ts-ში aspect ველი, CSS aspect-ratio თვისებით), რომელიც ემთხვევა თითოეული ატვირთული SVG-ის საკუთარ ზომებს (მაგ. game ბარათები 260/316, GTA VI trailer 860/488, hero-ები საკუთარ თანაფარდობაზე) — ასე object-cover არაფერს ჭრის ზედმეტად და სურათი ზუსტად ისე ჩანს, როგორც შენ დააპროექტე.

თუ ახალ ასეტს დაამატებ სხვა ზომით, აუცილებლად განაახლე შესაბამისი aspect ველი src/data.ts-ში (ან GameCard/hero კომპონენტში), თორემ object-cover არასწორად დაჭრის.
