/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [
    // Attribute list partial.
    "modules/Module-Nexo/templates/parts/sheet-attributes.html",
    "modules/Module-Nexo/templates/parts/sheet-groups.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
