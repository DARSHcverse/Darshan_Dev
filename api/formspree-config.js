module.exports = (req, res) => {
  const formId = (
    process.env.FORMSPREE_FORM_ID ||
    process.env.YOUR_FORM_ID ||
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ||
    process.env.VITE_FORMSPREE_FORM_ID ||
    ''
  ).trim();

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    formId: formId && formId !== 'YOUR_FORM_ID' ? formId : null
  });
};
