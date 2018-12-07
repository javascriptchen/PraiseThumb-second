const indexController = {
	index() {
		return async (ctx, next) => {
			return ctx.body = await ctx.render("index.html", {
				title: "大拇指点赞页面"
			});
		};
	}
};

export default indexController;