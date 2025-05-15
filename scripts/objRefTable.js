const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{Personagem: 0},
	{Sólido: 0},
	{Chão: 0},
	{Morte: 0},
	{Moeda: 0},
	{Texto: 0},
	{Alcapao: 0},
	{Ganhar: 0},
	{Texto2: 0},
	{Pontos: 0}
];

self.InstanceType = {
	Personagem: class extends self.ISpriteInstance {},
	Chão: class extends self.ISpriteInstance {},
	Morte: class extends self.ISpriteInstance {},
	Moeda: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Alcapao: class extends self.ISpriteInstance {},
	Ganhar: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {}
}