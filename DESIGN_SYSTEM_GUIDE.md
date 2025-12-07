# FinDesktop Design System - Quick Reference

## 🎨 Colors

### Primary (Blue)
```css
--color-primary-50: #f0f9ff;
--color-primary-500: #0ea5e9;  /* Main */
--color-primary-700: #0369a1;  /* Dark */
```

### Accent (Purple/Pink)
```css
--color-accent-50: #fdf4ff;
--color-accent-500: #d946ef;   /* Main */
--color-accent-700: #a21caf;   /* Dark */
```

### Semantic
```css
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;
```

## 📐 Spacing

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 12px;
--space-lg: 16px;
--space-xl: 24px;
--space-2xl: 32px;
--space-3xl: 48px;
--space-4xl: 64px;
```

## 🔤 Typography

### Font Sizes
```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

## 🎯 Common Patterns

### Gradient Button
```css
.btn {
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-accent-600) 100%);
  color: white;
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### Card Component
```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-gray-200);
  transition: all var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-accent-600) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## 🎭 Animations

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

### Pulse
```css
@keyframes pulse {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }
  50% { 
    transform: scale(1.05);
    box-shadow: 0 0 0 8px rgba(99, 102, 241, 0);
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

## 📦 Utility Classes

### Text
```css
.text-primary { color: var(--color-primary-600); }
.text-secondary { color: var(--color-gray-600); }
.text-center { text-align: center; }
```

### Spacing
```css
.mt-lg { margin-top: var(--space-lg); }
.mb-xl { margin-bottom: var(--space-xl); }
.p-2xl { padding: var(--space-2xl); }
```

### Layout
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
}

.container--narrow {
  max-width: 900px;
}
```

## 🎨 Component Templates

### Feature Card
```html
<div class="card">
  <div class="card__icon">
    <!-- Icon SVG -->
  </div>
  <h3 class="card__title">Feature Title</h3>
  <p class="card__description">Description text</p>
</div>
```

### Info Box
```html
<div class="alert alert--info">
  <h4 class="alert__title">Title</h4>
  <p>Message content</p>
</div>
```

### Badge
```html
<span class="badge badge--success">
  Label
</span>
```

## 🎯 Best Practices

1. **Use CSS Variables**: Always use design tokens
2. **Consistent Spacing**: Use the spacing scale
3. **Smooth Transitions**: Add transitions to interactive elements
4. **Hover States**: All clickable elements need hover feedback
5. **Focus States**: Ensure keyboard accessibility
6. **Mobile First**: Design for mobile, enhance for desktop
7. **Semantic Colors**: Use semantic colors appropriately
8. **Shadows for Depth**: Layer shadows for realistic depth
9. **Gradients Subtly**: Use gradients for accents, not overwhelming
10. **Animation Performance**: Use transform and opacity for animations

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1200px) { }
```

## 🚀 Quick Start Example

```html
<section class="section">
  <div class="container">
    <h2 class="gradient-text">Section Title</h2>
    <p class="text-secondary">Description text</p>
    
    <div class="grid">
      <div class="card">
        <div class="card__icon">🚀</div>
        <h3>Card Title</h3>
        <p>Card description</p>
        <button class="btn btn--primary">Action</button>
      </div>
    </div>
  </div>
</section>
```

This design system provides a solid foundation for creating consistent, beautiful, and maintainable UI components across the FinDesktop documentation website.
